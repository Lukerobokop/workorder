/**
 * @author Rokop, Luke (lrokop14@gmail.com)
 * @version 0.0.1
 * @summary work order system || created 2-26-20
 *@todo
 */
import EventHandler from './EventHandler'

export default class oop {
    constructor(){
        new EventHandler();
    }
}

window.addEventListener('load', () =>{
    new oop();
});