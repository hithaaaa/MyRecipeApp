import {Box} from '@mui/material'
import React from 'react'
import '../../App.css';
import useScrollTrigger from '@mui/material/useScrollTrigger';


const Rightdisplay = () => {
    const scrollToBottom = (id) => {
        const element = document.getElementById("loremipsum");
        element.scrollTop = element.scrollHeight;
    }
    function HideOnScroll(props) {
        const trigger = useScrollTrigger();
        
      }
    return (
        

        <div id="loremipsum" >
            <Box bgcolor="yellow" flex = {1} flexDirection="row" >
            
                <input type="text" />
            <input type="submit" />
            <p>Checkbox features and calling recipe cards is now possible</p>
            <p>ed finibus cursus enim, in iaculis ante. Nullam sit amet rutrum urna, vitae tempor nulla. Vestibulum in leo ligula. Donec vel feugiat dolor. Nulla et magna a ante egestas congue ut eget turpis.

Donec enim nisi, auctor in lobortis nec, semper sit amet odio. Praesent dapibus sapien at vulputate posuere. Maecenas vel enim mollis, hendrerit justo nec, viverra massa. Nam convallis non leo eget aliquet. Praesent quam arcu, imperdiet ut posuere in, ultricies et magna. Cras rhoncus tempus arcu vel aliquam. Nullam dapibus nibh vitae eros porttihtor accumsan. Aliquam ac aliquet lacus. Curabitur consequat porttitor auctor. Nullam sit amet eros vel tellus finibus semper. Curabitur finibus, libero a gravida accumsan, augue elit elementum sapien, vulputate luctus ipsum leo ac purus. Curabitur sit amet ante sed libero varius mollis id et dui. Nullam ut velit a neque tristique viverra.

Aenean feugiat bibendum quam. Aenean sollicitudin nunc sed egestas hendrerit. Pellentesque ut leo eget odio pulvinar fringilla ut ac ipsum. Suspendisse gravida auctor turpis, non pulvinar leo ultrices eget. Sed at ipsum id leo accumsan sagittis. Proin semper ligula id dolor laoreet, eu volutpat quam bibendum. Quisque in turpis ipsum. Pellentesque vitae tellus fringilla, faucibus odio ac, condimentum sapien. Curabitur consectetur consectetur diam vitae fringilla.

Vestibulum eu tortor magna. Maecenas ullamcorper nisi consequat ante consectetur aliquam. Mauris aliquam tortor et nibh venenatis, nec vestibulum ex aliquam. Curabitur eu finibus sapien. Nulla dui nibh, suscipit in magna ac, ultrices auctor mi. Nunc sodales lacus ac eros suscipit, ut fermentum dui sodales. Vestibulum tempus porttitor nisl quis tempor.

Nullam sit amet ipsum nec massa semper accumsan id vel orci. Donec sagittis elit eget dolor commodo semper. Morbi non consectetur nisl. Mauris a hendrerit libero, sed facilisis tellus. Cras tincidunt libero eu libero fringilla, sit amet vulputate massa luctus. Praesent molestie justo et faucibus sollicitudin. Nam enim tortor, consectetur ut venenatis eget, placerat sit amet orci. Vivamus suscipit dolor sed magna pellentesque, placerat tristique nulla dignissim. Q</p>
            </Box>
        </div>
    )
}
var arru = ["hey","hello"]
export default Rightdisplay
