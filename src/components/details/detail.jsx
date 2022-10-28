import React from 'react'
import './detail.css'
import SlackI from '../../assets/slack.png'
import githubI from '../../assets/github.png'


const detail = () => {
  return (
    <section>
        <div className='linkSection'>
            <div className='link'><a href="https://twitter.com/amynamoh" target="__blank"><h2>Twitter Link</h2></a></div>
            <div id='btn__zuri' className='link'><a href="https://training.zuri.team" target="__blank"><h2>Zuri Team</h2></a></div>
            <div id='books' className='link'><a href="https://books.zuri.team" target="__blank"><h2>Zuri Books</h2></a></div>
            <div id='book__python' className='link'><a href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" target="__blank"><h2>Python Books</h2></a></div>
            <div id='pitch' className='link'><a href="https://background.zuri.team" target="__blank"><h2>Background Check for Coders Link</h2></a></div>
            <div id='book__design' className='link'><a href="https://books.zuri.team/design-rules" target="__blank"><h2>Design Books</h2></a></div>
        </div>   
        <div className="profileicons">
        {/* <img src={SlackI} alt="" /> */}
        {/* <img src={githubI} alt="" /> */}
        <a href="https://hng9.slack.com/team/aminaumohammed" target="__blank"><img src={SlackI} alt="" /></a>
        <a href="https://github.com/amynamoh/HNG-task-1" target="__blank"><img src={githubI} alt="" /></a>
        </div>
    </section>
  )
}

export default detail