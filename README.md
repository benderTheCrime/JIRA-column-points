# JIRA Column Points
This is a simple Chrome Extension which will allow the user to tabulate JIRA column points in whichever board he or she is looking. It is important to get a sense of what the point breakdown across a sprint board is during the sprint because it is the only intra-sprint metric which can properly illustrate how well the sprint is progressing. The extension itself was generated using [Extensionizr](http://extensionizr.com/!#{"modules":["hidden-mode","no-bg","no-options","no-override","inject-js"],"boolean_perms":["tabs"],"match_ptrns":[]}). The code for generating column sums was adapted from the [Gist](https://gist.github.com/aaronshaf/35af6768b86d889b82b3) by [aaronshaf](https://github.com/aaronshaf).

## To use this Extension
- Pull down this repository, wherever you would like on your filesystem.
- Drag the containing folder into your extensions tab in Chrome and make sure it is enabled (in Incognito if you prefer).
- Make sure to go to the manifest.json and include your own JIRA organization.
- Configure your JIRA Board Card Layout to include Estimates (It will not work unless you do so).
- Enjoy!

special thanks to [federc88](https://github.com/federc88) who implemented this slightly differently [here](https://github.com/federc88/Jira-Column-Points).
