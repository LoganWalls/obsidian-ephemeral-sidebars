import { Plugin, WorkspaceSidedock } from "obsidian";

export default class EphemeralSidebars extends Plugin {
	root: HTMLElement;
	leftPanel: WorkspaceSidedock;
	rightPanel: WorkspaceSidedock;

	async onload() {
		this.app.workspace.onLayoutReady(() => {
			this.root = (this.app.workspace.rootSplit as any).containerEl;
			this.leftPanel = this.app.workspace.leftSplit;
			this.rightPanel = this.app.workspace.rightSplit;

			this.registerDomEvent(this.root, "focusin", () => {
				this.leftPanel.collapse();
				this.rightPanel.collapse();
			});
		});
	}
	onunload() {}
}
