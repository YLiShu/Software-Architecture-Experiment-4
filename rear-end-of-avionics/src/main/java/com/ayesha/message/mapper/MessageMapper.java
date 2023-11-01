package com.ayesha.message.mapper;

import com.ayesha.message.pojo.Message;
import com.baomidou.mybatisplus.core.mapper.BaseMapper;
import org.apache.ibatis.annotations.Mapper;


@Mapper
public interface MessageMapper extends BaseMapper<Message> {
    //插入留言
    int insert(Message message);
}
