import PogObject from "../PogData";

const firstInstall = new PogObject("GhostKey", {
    firstInstall: false
});

register("tick", () => {
    if (!firstInstall.firstInstall) {
        let message = `   &3&lYou have successfully installed GhostKey!\n` +
                        `   &r&3Press G to create a ghost block\n` +
                        `   &r&3Refer to README to change the keybind`
        ChatLib.chat(message)

        firstInstall.firstInstall = true
        firstInstall.save()
    }
})

register("command", () => {
    firstInstall.firstInstall = false
    firstInstall.save()
}).setName("gk_first_install")