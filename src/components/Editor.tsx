import * as React from "react";

import {Palette} from "./Palette.tsx";
import {CanvasShapes} from "../containers/CanvasShapes.ts";

export interface EditorProps {
}

export class Editor extends React.Component<EditorProps, {}> {
  render() {
    return <div className="editor">
      <Palette size="40" />
      <CanvasShapes />
    </div>;
  }
}
