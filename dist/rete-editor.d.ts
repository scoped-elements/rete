import 'regenerator-runtime';
import { LitElement } from 'lit';
import { Component, NodeEditor } from 'rete';
import { Data } from 'rete/types/core/data';
export declare class ReteEditor extends LitElement {
    editor: NodeEditor;
    data: Data | undefined;
    components: Array<new () => Component>;
    _editorEl: HTMLElement;
    _dockEl: HTMLElement;
    firstUpdated(): Promise<void>;
    render(): import("lit-html").TemplateResult<1>;
    static styles: any[];
}
