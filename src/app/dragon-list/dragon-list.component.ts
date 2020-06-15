import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';

import { Subscription } from 'rxjs';

import { Dragon } from '../core/models/dragon.model';
import { DragonService } from '../core/services/dragon.service';

@Component({
  selector: 'app-dragon-list',
  templateUrl: './dragon-list.component.html',
  styleUrls: ['./dragon-list.component.scss']
})
export class DragonsListComponent implements OnInit, OnDestroy {
  subscription: Subscription
  allDragons: Dragon[] = [];
  displayedColumns: string[] = [
    'id',
    'name',
    'type',
    'crew_capacity',
    'first_flight'
  ];

  dataSource = new MatTableDataSource(this.allDragons);

  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(
    private router: Router,
    private dragonService: DragonService
  ) { }

  ngOnInit(): void {
    this.getAllDragons();
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  getAllDragons(): void {
    this.subscription = this.dragonService.getAllDragons().subscribe(
      res => {
        this.allDragons = res;
        console.log("dragonService.getAllDragons: ", res)
        this.dataSource = new MatTableDataSource(this.allDragons);
        this.dataSource.sort = this.sort;
        console.log("dataSource: ", this.dataSource)
      }
    )
  }

  navigateToDetails(dragon: Dragon): void {
    this.router.navigate(['/dragon-details', dragon.id]);
  }
}
