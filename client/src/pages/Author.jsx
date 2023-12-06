import React from 'react'

const full =`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante 
risus, lacinia eu sapien sit amet, mattis cursus lacus. Donec vehicula, 
quam in dictum rutrum, eros leo ultricies elit, vel euismod felis dui nec leo. 
Duis hendrerit sem at ipsum dictum consectetur. Nulla facilisi. Sed tristique 
pulvinar dolor, dictum feugiat odio vehicula et. In non massa molestie, 
dignissim felis a, iaculis ante. Duis pharetra orci at erat varius mollis.>> 
Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ante risus, 
lacinia eu sapien sit amet, mattis cursus lacus. Donec vehicula, quam in dictum rutrum, eros leo ultricies elit, vel euismod felis dui nec leo. Duis hendrerit sem at ipsum dictum consectetur. Nulla facilisi. Sed tristique pulvinar dolor, dictum feugiat odio vehicula et. In non massa 
molestie, dignissim felis a, iaculis ante. Duis pharetra orci at erat varius mollis.`
const newFull = full.split('>>')

const Author = () => {
  return (
    <div>
      <h2>about author</h2>
      <p>Greetings to whoever has taken an initiative to 
        read this message about the <strong>Great Warning.</strong> Due to urgency of this message, 
        I would like to remain anonymous such 
        that attention is given to <strong>Jesus</strong> and His message.</p>
        <p>Am not a mystic, am not a prophet, am not a visionary, am not a locutionist 
          , neither am I a prophet nor a conspiracy theorist. Am simply unworthy servant and 
          above all a fat sinner who has been chosen by the Almighty Father to win Him souls 
          in this time which is so confusing, the time where we praise darkness not light, where the 
          abnormal is considered to be normal as well as bad is taken to be good. 
        </p>
        <h3>our hope</h3>
        <p>At this time when everything seems to be lost, God through His infinite Mercy is 
          going to warn everyone on the face of the earth through an act of mercy where everyone 
          shall be able to see his or her soul as God sees it.
        </p>

        
    </div>
  )
}

export default Author
