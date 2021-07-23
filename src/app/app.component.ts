import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public chunkSize: number = 5;
  public groupDataListChunkArr = [];

  public groupDataList: any = [
    { groupName: 'test1', groupId: '1' },
    { groupName: 'test2', groupId: '2' },
    { groupName: 'test3', groupId: '3' },
    { groupName: 'test4', groupId: '4' },
    { groupName: 'test5', groupId: '5' },
    { groupName: 'test6', groupId: '6' },
    { groupName: 'test7', groupId: '7' },
    { groupName: 'test8', groupId: '8' },
    { groupName: 'test9', groupId: '9' },
    { groupName: 'test10', groupId: '10' },
    { groupName: 'test11', groupId: '11' },
    { groupName: 'test12', groupId: '12' },
    { groupName: 'test13', groupId: '13' },
    { groupName: 'test14', groupId: '14' },
    { groupName: 'test15', groupId: '15' },
    { groupName: 'test16', groupId: '16' },
    { groupName: 'test17', groupId: '17' },
    { groupName: 'test18', groupId: '18' }
  ];

  public ngOnInit() {
    this.groupDataListChunkArr = this.sliceIntoChunks(
      this.groupDataList,
      this.chunkSize
    );
    console.log(this.sliceIntoChunks(this.groupDataList, this.chunkSize));
  }

  public sliceIntoChunks(arr, chunkSize) {
    const res = [];
    for (let i = 0; i < arr.length; i += chunkSize) {
      const chunk = arr.slice(i, i + chunkSize);
      res.push(chunk);
    }
    return res;
  }

  public autoGenerateTd(dataList: any): any {
    let arr = [];
    let count = 0;

    if (dataList.length < this.chunkSize) {
      count = this.chunkSize - dataList.length;

      for (let i = 0; i < count; i++) {
        arr.push(i);
      }

      return arr;
    }
  }
}
