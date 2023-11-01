package com.ayesha.message.service;

import com.ayesha.message.pojo.Message;
import com.baomidou.mybatisplus.extension.service.IService;


public interface IMessageService extends IService<Message> {
    void create(Message msg);
}
