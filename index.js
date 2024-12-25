import "./firstInstall"
import PogObject from "PogData";

const BlockPoss = Java.type("net.minecraft.util.BlockPos");
const setAir = (x, y, z) => World.getWorld().func_175698_g(new BlockPoss(x, y, z));
const setBlockState = (x, y, z, state) => World.getWorld().func_175656_a(new BlockPoss(x, y, z), state);

const settings = new PogObject("GhostKey", {
    ghostKey: Keyboard.KEY_G // Default key is G
}, "settings.json");

let ghostkey = Client.getKeyBindFromKey(settings.ghostKey, "Ghost key");

const updateKeyBind = () => {
    ghostkey = Client.getKeyBindFromKey(settings.ghostKey, "Ghost key");
};

register("command", (newKey) => {
    if (!newKey) {
        ChatLib.chat("&cUsage: /setghostkey <key>");
        return;
    }

    const keyCode = Keyboard["KEY_" + newKey.toUpperCase()];
    if (!keyCode) {
        ChatLib.chat(`&cInvalid key: ${newKey}`);
        return;
    }

    settings.ghostKey = keyCode;
    settings.save();
    updateKeyBind();

    ChatLib.chat(`&aGhost key set to ${newKey.toUpperCase()}!`);
}).setName("setghostkey");

register("tick", () => {
    if (ghostkey.isPressed()) {
        const look = Player.lookingAt();
        const [x, y, z] = [look.x, look.y, look.z];

        if (!x || !y || !z) return;

        setAir(x, y, z);
    }
});
