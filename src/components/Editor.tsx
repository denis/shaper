import * as React from "react";

import {Palette} from "./Palette.tsx";
import {Canvas} from "./Canvas.tsx";

export interface EditorProps {
}

export class Editor extends React.Component<EditorProps, {}> {
  render() {
    return <div className="editor">
      <Palette />
      <Canvas />
    </div>;
  }
}
