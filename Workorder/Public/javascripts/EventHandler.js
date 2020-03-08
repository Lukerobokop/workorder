/**
 * Comment header block
 */

export default class EventHandler {

    constructor() {
        this.handleButtonClick();
    }

    handleButtonClick() {
        document.getElementById('submit').addEventListener('click', (event) => {
            event.stopImmediatePropagation();
            this.setDate(document.getElementById('year').value, document.getElementById('day').value, document.getElementById('month').value);
            this.setBuilding(document.getElementById('building').value);
            this.setRoom(document.getElementById('room').value);
            this.setDescription(document.getElementById('description').value);
            this.setList();
            this.setWorkOrder();
            this.setSave();
        });
    }
    setDate(year, day, month){
        this.date = `${month}/${day}/${year}`;
    }

    setBuilding(building){
        this.building = building;
    }

    setRoom(room){
        this.room = room;
    }

    setDescription(description){
        this.description = description;
    }

    setList(date, building, room, description){
        let list = {
            date: `${date}`,
            building: `${building}`,
            room: `${room}`,
            description: `${description}`
        }
    }
    setWorkOrder(list){
        let workOrder = [];
        workOrder.push(list);
        document.getElementId(order).innerHTML = `<p>${workOrder}</p>`
    }
    setSave(){
        save = IO.unlink(`master.txt`);
        save = IO.appendfile(`master.txt, oop.js`);
    }

    }