# Dev Builds

Our latest version of the game develop introducing new masked features as bugs, improvements, headache and hate.

## 0.0.6

### rot.1
Filename | build log | build actions | Commit | Platform
| -------- | -------- | -------- | -------- | -------- |
[bitrot_dev_0.0.6.1_linux_onefile](./0.0.6/bitrot_dev_0.0.6.1_linux_onefile.zip) | [view log](./0.0.6/logs/bitrot_dev_0.0.6.1_linux_onefile.log) | 46f4507 | [GH Action](./actions/release-linux-single.yml) | Linux
[bitrot_dev_0.0.6.1_windows_onefile](./0.0.6/bitrot_dev_0.0.6.1_windows_onefile.zip) | [view log](./0.0.6/logs/bitrot_dev_0.0.6.1_windows_onefile.log) | 5bea74a | [GH Action](./actions/release-windows-single.yml) | Windows
[bitrot_dev_0.0.6.1_windows_standalone](./0.0.6/bitrot_dev_0.0.6.1_windows_standalone.zip) | [view log](./0.0.6/logs/bitrot_dev_0.0.6.1_windows_standalone.log) | 2126677 | [GH Action](./actions/release-windows-dll-packed.yml) | Windows

**Issues**
* On versions:
    * [bitrot_dev_0.0.6.1_linux_onefile](./0.0.6/bitrot_dev_0.0.6.1_linux_onefile.zip):
        * Cannot change the game config, blank modal
        * When press apply game crash and need to be manualy restarted
    * [bitrot_dev_0.0.6.1_windows_onefile](./0.0.6/bitrot_dev_0.0.6.1_windows_onefile.zip):
        * Cannot change the game config, blank modal
        * When press apply game crash and need to be manualy restarted
        * Need to disable windows defender and other AV and grant permissions
            ```
                Nuitka reports: "Program:Win32/Wacapew.C!ml" on Windows 10.
                The project doesn't have digital signatures.
            ```
    * [bitrot_dev_0.0.6.1_windows_standalone](./0.0.6/bitrot_dev_0.0.6.1_windows_standalone.zip):
        * [FIXED] Cannot change the game config, blank modal
        * [FIXED] When press apply game crash and need to be manualy restarted
        * Need to disable windows defender and other AV and grant permissions
            ```
                Used the "--standalone" flag to get the game DLLs and other compiled already unpacked
                Nuitka reports: "Program:Win32/Wacapew.C!ml" on Windows 10.
                The project doesn't have digital signatures.
            ```