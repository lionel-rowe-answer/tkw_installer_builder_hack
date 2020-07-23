# Instructions

1. Run `node updateInstallerMetadata.js`.
   - At the prompts, input values for latest [TKW_NRL_configs](https://github.com/nhsdigitalmait/TKW_NRL_configs) commit:
      + GitHub commit hash, e.g. `9c38dad0137fb2cb59eca6111ded6dc258b54eac`.
      + Build date in YYYY-MM-DD format, e.g. `2020-07-21`.
2. Open `TKWInstaller_NRL_2_1_0_beta_API v<VERSION>.jar` in [7-Zip](https://www.7-zip.org/)
   - Right click in File Explorer.
   - 7-Zip > Open archive
3. Replace `tkwinstaller/TKWInstaller.class` with the custom one created in step 1.
4. Replace the `contrib` and `config` folders in `tkwinstaller/TKW.zip/TKW` with the latest updates from [TKW_NRL_configs](https://github.com/nhsdigitalmait/TKW_NRL_configs).
5. Save all changes.
6. Open `TKWInstaller_NRL_2_1_0_beta_API v<VERSION>.jar`, install, and run the newly installed TKW to check everything is working as expected.
