import React from 'react'
import './detail.css'
import SlackI from '../../assets/slack.png'
import githubI from '../../assets/github.png'


const detail = () => {
  return (
    <section>
        <div className='linkSection'>
            <div className='link' id='tweet'><h2>Twitter Link</h2></div>
            <div className='link'id='btn__zuri'><a href="https://training.zuri.team" target="__blank"><h2>Zuri Team</h2></a></div>
            <div className='link'id='books'><a href="https://books.zuri.team" target="__blank"><h2>Zuri Books</h2></a></div>
            <div className='link'id='book__python'><a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" target="__blank"><h2>Python Books</h2></a></div>
            <div className='link'id='pitch'><a href="https://background.zuri.team" target="__blank"><h2>Background Check for Coders Link</h2></a></div>
            <div className='link'id='book__design'><a href="https://books.zuri.team/design-rules" target="__blank"><h2>Design Books</h2></a></div>
        </div>   
        <div className="profileicons">
        <img src={SlackI} alt="" />
        <img src={githubI} alt="" />
        </div>
    </section>
  )
}

export default detail