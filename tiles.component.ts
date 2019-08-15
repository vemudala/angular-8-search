import { Component, OnInit } from '@angular/core';
import {ITile} from '../interfaces/itile';

@Component({
  selector: 'app-tiles',
  templateUrl: './tiles.component.html',
  styleUrls: ['./tiles.component.css']
})
export class TilesComponent implements OnInit {
  searcheditems:Array<ITile>=[]
  imagepath:string='./assets/images/'
  search:Array<string>=['model','price','name'];
  selected:string="price";
  selectedinput:string="";
tiles:Array<ITile>=[{
  image:'1.jpg',
    name:'mahesh',
    model:'developer',
    price:100,
    rating:3,
    status:1
},
{
  image:'2.jpg',
    name:'dhoni',
    model:'cricketer',
    price:200,
    rating:1,
    status:0
},
{
  image:'3.png',
    name:'kohli',
    model:'batter',
    price:500,
    rating:4,
    status:1
},
{
  image:'4.png',
    name:'virat',
    model:'bowl',
    price:5500,
    rating:4,
    status:0
},
{
  image:'5.jpg',
    name:'raj',
    model:'batter',
    price:5000,
    rating:4,
    status:1
},]
  constructor() {
    this.searcheditems=this.tiles;
   }

  ngOnInit() {
  }
  search_filter(){
    // alert(this.selected);
    // alert(this.selectedinput);
    this.searcheditems= this.searchh(this.selected,this.selectedinput,this.tiles);
console.log(this.searcheditems);
  }
  searchh(selected,selectedinput,tilees){
    let searcheditems= tilees.filter((tilee)=>{
      if(this.selected=='price'){
        return tilee.price>+selectedinput
      }
    })
    return searcheditems;
  }
}
