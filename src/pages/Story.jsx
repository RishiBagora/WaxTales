import React from 'react'
import StoryHero from '../components/story/StoryHero'
import StoryStatement from '../components/story/StoryStatement'
import StoryBlocks from '../components/story/StoryBlocks'
import StoryCraft from '../components/story/StoryCraft'
import StoryEmotion from '../components/story/StoryEmotion'
import StoryClosing from '../components/story/StoryClosing'
const Story = () => {
  return (
    <>
    <StoryHero/>
    {/* <StoryStatement/> */}
    <StoryBlocks/>
    {/* <StoryCraft/> */}
    <StoryEmotion/> 
    <StoryClosing/>
    </>
  )
}

export default Story