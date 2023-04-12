import { averageColor } from "./functions/averageColor"
import { useState } from "react"
import { Flex, Image } from "@chakra-ui/react"

export const AmbientComponent = () => {

  const [bgColor,setBgColor] = useState('rgb(111,93,110)')

  setTimeout(() => {
    const rgb = averageColor(
        document.getElementById('img'));

        setBgColor('rgb(' + rgb.r + ','
        + rgb.g + ','
        + rgb.b + ')')
  }, 500)
  
  return (
    <Flex 
      borderRadius={0}
      position= 'relative'
      _before={{
        content: `''`,
        position: 'absolute',
        inset: '10px',
        background: 'inherit',
        filter: 'blur(80px)',
        borderRadius: 'inherit',
        bgColor: bgColor,
        transform: 'translate3d(0,40px,0)'
      }}
    >
      <Image
        src="picture.jpeg"
        alt='Chakra UI'
        id='img'
        p={10}
        zIndex={2}
      />
    </Flex>
  )

}