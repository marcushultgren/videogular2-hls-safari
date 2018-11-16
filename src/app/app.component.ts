import { Component, OnInit, ViewChild } from '@angular/core';
import { VgHLS } from 'videogular2/src/streaming/vg-hls/vg-hls';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  @ViewChild(VgHLS) vgHls: VgHLS;
  title = 'videogular-hls';
  currentStream = 'https://content.jwplatform.com/manifests/yp34SRmf.m3u8';

  ngOnInit() {
  }

  onPlayerReady(api) {
    debugger;
  }
}
