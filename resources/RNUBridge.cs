using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class RNUBridge : MonoBehaviour
{
    [SerializeField] private float speed = 12f;
    [SerializeField] private float changeBGColorDuration = 12f;
    private bool doRotate = true;
    private bool doChangeBGColor = false;
    private Color currentBG;

    void Awake()
    {
        UnityMessageManager.Instance.OnRNMessage += onMessage;
        UnityMessageManager.Instance.SendMessageToRN("Hello from Unity!");
        currentBG = Camera.main.backgroundColor;
    }

    void OnDestroy()
    {
        UnityMessageManager.Instance.OnRNMessage -= onMessage;
    }

    void onMessage(MessageHandler message)
    {
        var data = message.getData<string>();
        Debug.Log("onMessage:" + data);

        switch (data)
        {
            case "ToggleRotate":
                doRotate = !doRotate;
                UnityMessageManager.Instance.SendMessageToRN("Now it is " + (doRotate ? "" : "not ") + "rotating.");
                message.send(new { CallbackMsg = "JSON" +
                    ": Rotate " + (doRotate ? "ON" : "OFF") });
                break;
            case "OnStart":
                UnityMessageManager.Instance.SendMessageToRN("Hello from Unity!");
                break;
            case "ChangeBGColor":
                doChangeBGColor = true;
                break;
            default:
                break;
        }
    }

    void ChangeBGColor()
    {
        currentBG = Camera.main.backgroundColor;
        Color newBG = new Color(
            Random.Range(0f, 1f),
            Random.Range(0f, 1f),
            Random.Range(0f, 1f)
        );
        float t = Mathf.PingPong(Time.time, changeBGColorDuration) / changeBGColorDuration;
        Camera.main.backgroundColor = Color.Lerp(currentBG, newBG, t);
        doChangeBGColor = false;
    }

    void Rotate()
    {
        float angle = Time.deltaTime * speed;
        transform.Rotate(0, angle, 0);
    }

    void FixedUpdate()
    {
        if (doRotate) Rotate();

        if (doChangeBGColor) ChangeBGColor();
    }

}
