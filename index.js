import "./firstInstall"

const BlockPoss = Java.type("net.minecraft.util.BlockPos")
const setAir = (x, y, z) => World.getWorld().func_175698_g(new BlockPoss(x, y, z))
const setBlockState = (x, y, z, state) => World.getWorld().func_175656_a(new BlockPoss(x, y, z), state)

const ghostkey = Client.getKeyBindFromKey(Keyboard.KEY_G, "Ghost key")

register("tick", () => {
    if (ghostkey.isPressed()) {
        const look = Player.lookingAt()
        const [x, y, z] = [look.x, look.y, look.z]

        if (!x || !y || !z) return

        setAir(x, y, z)
    }
})