import { Component } from '@angular/core';
import { MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-member',
  standalone: true,
  imports: [MatTableModule],
  templateUrl: './member.html',
  styleUrl: './member.css',
})
export class Member {
  protected readonly displayedColumns = ['name', 'age', 'email'];

  dataSource: Array<{ name: string; age: number; email: string }> = [];
  
}