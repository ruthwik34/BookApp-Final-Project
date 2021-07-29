import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-book-list',
  templateUrl: './book-list.component.html',
  styleUrls: ['./book-list.component.css']
})
export class BookListComponent implements OnInit {

  constructor(private service:SharedService) { }

  BookList:any=[];
  tempBookList:any=[];
  ngOnInit(): void {
    this.refreshBookList();
  }

  refreshBookList(){
    this.service.getBooksList().subscribe(data=>{
        this.BookList=data;
        // var j=0;
        for(var i=0;i<this.BookList.length;i+=3)
        {
          this.tempBookList.push({item1:this.BookList[i],item2:this.BookList[i+1],item3:this.BookList[i+2]});
        }
    });
   
  }

  
}

