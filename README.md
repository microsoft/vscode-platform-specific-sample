# VS Code Platform Specific Extension Sample

[![CI](https://github.com/microsoft/vscode-platform-specific-sample/actions/workflows/ci.yml/badge.svg)](https://github.com/microsoft/vscode-platform-specific-sample/actions/workflows/ci.yml) 
[![CI](https://badgen.net/vs-marketplace/v/joaomoreno.vscode-platform-specific-sample)](https://marketplace.visualstudio.com/items?itemName=joaomoreno.vscode-platform-specific-sample)

This is an example platform-specific VS Code extension. It exposes a single command `Get Ripgrep version`, which pops up a notification containing the version of the bundled [ripgrep](https://github.com/BurntSushi/ripgrep) executable. It bundles the ripgrep executable by depending on [@vscode/ripgrep](https://github.com/microsoft/vscode-ripgrep), which contains the platform-specific ripgrep executable.

The [CI script](https://github.com/microsoft/vscode-platform-specific-sample/actions/workflows/ci.yml) makes sure VSIXs for all supported VS Code targets are built in an automated fashion. [Once built](https://github.com/microsoft/vscode-platform-specific-sample/actions/runs/1059200691), each VSIX should be available as a build artifact. Furthermore, if a tag (eg `v1.0.0`) is pushed to the repo, an additional build stage will collect all built VSIX files and publish them accordingly to the VS Marketplace using the new `--target` [vsce](https://github.com/microsoft/vscode-vsce) flag.

## Contributing

This project welcomes contributions and suggestions.  Most contributions require you to agree to a
Contributor License Agreement (CLA) declaring that you have the right to, and actually do, grant us
the rights to use your contribution. For details, visit https://cla.opensource.microsoft.com.

When you submit a pull request, a CLA bot will automatically determine whether you need to provide
a CLA and decorate the PR appropriately (e.g., status check, comment). Simply follow the instructions
provided by the bot. You will only need to do this once across all repos using our CLA.

This project has adopted the [Microsoft Open Source Code of Conduct](https://opensource.microsoft.com/codeofconduct/).
For more information see the [Code of Conduct FAQ](https://opensource.microsoft.com/codeofconduct/faq/) or
contact [opencode@microsoft.com](mailto:opencode@microsoft.com) with any additional questions or comments.

## Trademarks

This project may contain trademarks or logos for projects, products, or services. Authorized use of Microsoft 
trademarks or logos is subject to and must follow 
[Microsoft's Trademark & Brand Guidelines](https://www.microsoft.com/en-us/legal/intellectualproperty/trademarks/usage/general).
Use of Microsoft trademarks or logos in modified versions of this project must not cause confusion or imply Microsoft sponsorship.
Any use of third-party trademarks or logos are subject to those third-party's policies.
