import { Component, OnInit } from '@angular/core';
import { ToolMode } from 'app/model/paper';
import { ColorUtil } from 'app/scripts/common';
import { ToolModeService } from 'app/services';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-toolpanel',
  templateUrl: './toolpanel.component.html',
  styleUrls: ['./toolpanel.component.scss'],
})
export class ToolPanelComponent implements OnInit {
  readonly TOOL_MODE_SELECT = ToolMode.Selection;
  readonly TOOL_MODE_PENCIL = ToolMode.Pencil;
  readonly TOOL_MODE_PEN = ToolMode.Pen;
  readonly TOOL_MODE_CIRCLE = ToolMode.Circle;
  readonly TOOL_MODE_RECTANGLE = ToolMode.Rectangle;
  readonly TOOL_MODE_ZOOMPAN = ToolMode.ZoomPan;

  private toolMode$: Observable<ToolMode>;

  // TODO: deal with invalid fill/stroke colors
  constructor(readonly toolModeService: ToolModeService) {}

  ngOnInit() {
    this.toolMode$ = this.toolModeService.getToolModeObservable();
  }

  onSelectClick() {
    this.toolModeService.setToolMode(ToolMode.Selection);
  }

  onPencilClick() {
    this.toolModeService.setToolMode(ToolMode.Pencil);
  }

  onPenClick() {
    this.toolModeService.setToolMode(ToolMode.Pen);
  }

  onCircleClick() {
    this.toolModeService.setToolMode(ToolMode.Circle);
  }

  onRectangleClick() {
    this.toolModeService.setToolMode(ToolMode.Rectangle);
  }

  onZoomPanClick() {
    this.toolModeService.setToolMode(ToolMode.ZoomPan);
  }

  get fillColor() {
    return this.toolModeService.getFillColor();
  }

  set fillColor(color: string) {
    this.toolModeService.setFillColor(color);
  }

  get strokeColor() {
    return this.toolModeService.getStrokeColor();
  }

  set strokeColor(color: string) {
    this.toolModeService.setStrokeColor(color);
  }
}