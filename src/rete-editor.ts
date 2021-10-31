import 'regenerator-runtime';

import { css, html, LitElement, unsafeCSS } from 'lit';
import { property, query } from 'lit/decorators.js';

import { Component, NodeEditor } from 'rete';
// @ts-ignore
import { styles as connectionStyles } from 'rete-connection-plugin';
import ConnectionPlugin from 'rete-connection-plugin';
// @ts-ignore
import Stage0RenderPlugin from 'rete-stage0-render-plugin';
// @ts-ignore
import stage0Styles from 'rete-stage0-render-plugin/build/stage0-render-plugin.min.css';
import DockPlugin from 'rete-dock-plugin';
import { Data } from 'rete/types/core/data';

export class ReteEditor extends LitElement {
  editor!: NodeEditor;

  @property()
  data: Data | undefined;

  @property()
  components: Array<new () => Component> = [];

  @query('.node-editor')
  _editorEl!: HTMLElement;

  @query('.dock')
  _dockEl!: HTMLElement;

  async firstUpdated() {
    this.editor = new NodeEditor('demo@0.1.0', this._editorEl);
    this.editor.use(ConnectionPlugin);
    this.editor.use(Stage0RenderPlugin);

    this.editor.use(DockPlugin, {
      container: this._dockEl,
      plugins: [Stage0RenderPlugin], // render plugins
    } as any);

    for (const CustomComponent of this.components) {
      this.editor.register(new CustomComponent());
    }

    if (this.data) {
      await this.editor.fromJSON(this.data);
    }
  }

  render() {
    return html`
      <div class="editor">
        <div class="container">
          <div class="node-editor"></div>
        </div>
        <div class="dock"></div>
      </div>
    `;
  }

  static styles = [
    unsafeCSS(connectionStyles),
    stage0Styles,
    css`
      .editor {
        display: flex;
        flex-wrap: nowrap;
        flex-direction: column;
        height: 100vh;
      }
      .dock {
        height: 100px;
        overflow-x: auto;
        overflow-y: hidden;
        white-space: nowrap;
      }
      .dock-item {
        display: inline-block;
        vertical-align: top;
        transform: scale(0.8);
        transform-origin: 50% 0;
      }
      .container {
        flex: 1;
        overflow: hidden;
        display: flex;
      }
      .node-editor {
        flex: 1;
      }
    `,
  ];
}
