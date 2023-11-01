package com.ayesha.message.controller;


import com.ayesha.message.pojo.Message;
import com.ayesha.message.service.IMessageService;
import com.ayesha.message.util.JsonResult;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;


@RestController
@RequestMapping("message")
public class MessageController {
    @Autowired
    private IMessageService iMessageService;

    @RequestMapping("create")
    public JsonResult<Void> create(Message msg) {
        iMessageService.create(msg);
        return new JsonResult<>(200);
    }
}
