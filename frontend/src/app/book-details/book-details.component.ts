import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css']
})
export class BookDetailsComponent implements OnInit {

  constructor( private route: ActivatedRoute,private service:SharedService) { }

  BookDetails:any;
  ngOnInit(): void {
    this.getBook();
  }
  getBook(){
    var id = Number(this.route.snapshot.paramMap.get('id'));
    this.service.getBookDetails(id).subscribe(data=>{
      this.BookDetails=data;
    });
  }
}
