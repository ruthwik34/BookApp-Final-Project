import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-book-sort',
  templateUrl: './book-sort.component.html',
  styleUrls: ['./book-sort.component.css']
})
export class BookSortComponent implements OnInit {

  constructor( private route: ActivatedRoute,private service:SharedService) { }
  BookList:any=[];

  ngOnInit(): void {
    this.sortBook();
  }
  sortBook(){
    var sort_by=String(this.route.snapshot.paramMap.get('sort_by'));
    this.service.sortBooksList(sort_by).subscribe(data=>{
      this.BookList=data;
    });
  }

}
