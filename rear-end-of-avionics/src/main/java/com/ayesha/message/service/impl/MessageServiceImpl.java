package com.ayesha.message.service.impl;

import com.ayesha.message.mapper.MessageMapper;
import com.ayesha.message.pojo.Message;
import com.ayesha.message.service.IMessageService;
import com.baomidou.mybatisplus.extension.service.impl.ServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;


@Service
public class MessageServiceImpl extends ServiceImpl<MessageMapper, Message> implements IMessageService {
    @Autowired
    private MessageMapper messageMapper;

    @Override
    public void create(Message msg) {
        Date now = new Date();
        Message message = new Message();
        message.setId(msg.getId());
        message.setMsg(msg.getMsg());
        message.setCreateTime(now);

        messageMapper.insert(message);
    }
}
