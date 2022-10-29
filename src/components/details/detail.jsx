import React from 'react'
import './detail.css'
import SlackI from '../../assets/slack.png'
import githubI from '../../assets/github.png'


const detail = () => {
  return (
    <section>
        <div className='linkSection'>
            <a href="https://twitter.com/amynamoh" target="_blank"><h2>Twitter Link</h2></a>
            <a id='btn__zuri' href="https://training.zuri.team" target="_blank"><h2>Zuri Team</h2></a>
            <a  id='books' href="https://books.zuri.team" target="_blank"><h2>Zuri Books</h2></a>
            <a id='book__python' href="https://books.zuri.team/python-for-beginners?ref_id=<yourslackname>" target="_blank"><h2>Python Books</h2></a>
            <a id='pitch' href="https://background.zuri.team" target="_blank"><h2>Background Check for Coders Link</h2></a>
            <a id='book__design' href="https://books.zuri.team/design-rules" target="_blank"><h2>Design Books</h2></a>
        </div>  
        <div className="profileicons">
        <a href="https://hng9.slack.com/team/aminaumohammed" target="_blank"><img src={SlackI} alt="slack" /></a>
        <a href="https://github.com/amynamoh/HNG-task-1" target="_blank"><img src={githubI} alt="github" /></a>
        </div>
    </section>
  )
}

export default detail