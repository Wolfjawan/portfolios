import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  _convertContentStateToRawJS,
  EditorState,
  Editor,
  LinkDecorator,
  _convertFromRow
} from "modraftjs";
import ExampleState from "./example.json";

class MoDraftJS extends Component {
  state = {
    editorState: EditorState.createEmpty(LinkDecorator),
    contentState: {},
    html: ""
  };

  onChange = e => {
    this.setState({ ...e });
  };

  render() {
    const { contentState, html, editorState } = this.state;
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-around",
          marginTop: "20px"
        }}
      >
        <div style={{ width: "90%" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div />
            <Link to="/">Back</Link>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <h2>Rich Text Editor</h2>
            <span
              style={{ cursor: "pointer" }}
              onMouseDown={() =>
                this.setState({
                  editorState: _convertFromRow(
                    editorState,
                    ExampleState.contentState
                  )
                })
              }
            >
              Load Example
            </span>
          </div>
          <div>
            <Editor
              onChange={this.onChange}
              editorState={editorState}
              onChangeHTML={this.onChangeHTML}
            />
          </div>
          {html && (
            <div>
              <h1> HTML state</h1>
              <div
                dangerouslySetInnerHTML={{
                  __html: html
                }}
              />
            </div>
          )}
          {_convertContentStateToRawJS(contentState) && (
            <div>
              <h1>Content State</h1>
              <pre>{_convertContentStateToRawJS(contentState)}</pre>
            </div>
          )}
        </div>
      </div>
    );
  }
}
export default MoDraftJS;
