import { IDs, Container } from '../container';
export interface Buff extends IDs {
    nameEditorOnly: string;
    editorSuffix: string;
    tooltip: string;
    tooltipExtended: string;
    isAnEffect: boolean;
    race: string;
    icon: string;
    target: string;
    special: string;
    effect: string;
    lightning: string;
    missileArt: string;
    missileSpeed: number;
    missileArc: number;
    missileHomingEnabled: boolean;
    targetAttachments: number;
    targetAttachmentPoint1: string;
    targetAttachmentPoint2: string;
    targetAttachmentPoint3: string;
    targetAttachmentPoint4: string;
    targetAttachmentPoint5: string;
    targetAttachmentPoint6: string;
    effectAttachmentPoint: string;
    specialAttachmentPoint: string;
    effectSound: string;
    effectSoundLooping: string;
    requiredSpellDetail: string;
}
export declare const BuffProps: ({
    id: "fnam";
    name: "nameEditorOnly";
    type: "string";
    netsafe: "true";
} | {
    id: "fnsf";
    name: "editorSuffix";
    type: "string";
    netsafe: "true";
} | {
    id: "ftip";
    name: "tooltip";
    type: "string";
    netsafe: "true";
} | {
    id: "fube";
    name: "tooltipExtended";
    type: "string";
    netsafe: "true";
} | {
    id: "feff";
    name: "isAnEffect";
    type: "bool";
    netsafe: "false";
} | {
    id: "frac";
    name: "race";
    type: "unitRace";
    netsafe: "false";
} | {
    id: "fart";
    name: "icon";
    type: "icon";
    netsafe: "true";
} | {
    id: "ftat";
    name: "target";
    type: "modelList";
    netsafe: "true";
} | {
    id: "fsat";
    name: "special";
    type: "modelList";
    netsafe: "true";
} | {
    id: "feat";
    name: "effect";
    type: "modelList";
    netsafe: "true";
} | {
    id: "flig";
    name: "lightning";
    type: "lightningEffect";
    netsafe: "true";
} | {
    id: "fmat";
    name: "missileArt";
    type: "modelList";
    netsafe: "true";
} | {
    id: "fmsp";
    name: "missileSpeed";
    type: "int";
    netsafe: "false";
} | {
    id: "fmac";
    name: "missileArc";
    type: "unreal";
    netsafe: "true";
} | {
    id: "fmho";
    name: "missileHomingEnabled";
    type: "bool";
    netsafe: "false";
} | {
    id: "ftac";
    name: "targetAttachments";
    type: "int";
    netsafe: "true";
} | {
    id: "fta0";
    name: "targetAttachmentPoint1";
    type: "stringList";
    netsafe: "true";
} | {
    id: "fta1";
    name: "targetAttachmentPoint2";
    type: "stringList";
    netsafe: "true";
} | {
    id: "fta2";
    name: "targetAttachmentPoint3";
    type: "stringList";
    netsafe: "true";
} | {
    id: "fta3";
    name: "targetAttachmentPoint4";
    type: "stringList";
    netsafe: "true";
} | {
    id: "fta4";
    name: "targetAttachmentPoint5";
    type: "stringList";
    netsafe: "true";
} | {
    id: "fta5";
    name: "targetAttachmentPoint6";
    type: "stringList";
    netsafe: "true";
} | {
    id: "feft";
    name: "effectAttachmentPoint";
    type: "stringList";
    netsafe: "true";
} | {
    id: "fspt";
    name: "specialAttachmentPoint";
    type: "stringList";
    netsafe: "true";
} | {
    id: "fefs";
    name: "effectSound";
    type: "soundLabel";
    netsafe: "true";
} | {
    id: "fefl";
    name: "effectSoundLooping";
    type: "soundLabel";
    netsafe: "true";
} | {
    id: "fspd";
    name: "requiredSpellDetail";
    type: "spellDetail";
    netsafe: "true";
})[];
export declare enum Buffs {
    AcidBomb = "BNab",
    AerialShackles = "Bmlt",
    AerialShacklesCaster = "Bmlc",
    AnimateDead = "BUan",
    AnimateDeadExtra = "BUad",
    AntiMagicShell = "Bams",
    AntiMagicShellExtra = "Bam2",
    AuraOfBlight = "Babr",
    Avatar = "BHav",
    Banish = "BHbn",
    Barkskin = "Bbar",
    BattleRoar = "BNbr",
    Bear = "BNsg",
    Berserk = "Bbsk",
    BigBadVoodoo = "BOvd",
    BigBadVoodooCaster = "BOvc",
    BlackArrow = "BNba",
    BladestormCaster = "BOww",
    BlightEffect = "Xbli",
    Blizzard = "BHbd",
    BlizzardCaster = "BHbz",
    BlizzardEffect = "XHbz",
    Bloodlust = "Bblo",
    BreathOfFire = "BNbf",
    BreathOfFrost = "BCbf",
    BrillianceAura = "BHab",
    BuildingDamageHumanLarge = "Xfhl",
    BuildingDamageHumanMedium = "Xfhm",
    BuildingDamageHumanSmall = "Xfhs",
    BuildingDamageNightElfLarge = "Xfnl",
    BuildingDamageNightElfMedium = "Xfnm",
    BuildingDamageNightElfSmall = "Xfns",
    BuildingDamageOrcLarge = "Xfol",
    BuildingDamageOrcMedium = "Xfom",
    BuildingDamageOrcSmall = "Xfos",
    BuildingDamageUndeadLarge = "Xful",
    BuildingDamageUndeadMedium = "Xfum",
    BuildingDamageUndeadSmall = "Xfus",
    BurningOil = "Bbof",
    BurningOilEffect = "Xbof",
    CarrionBeetles = "BUcb",
    CarrionSwarmCaster = "BUcs",
    ChemicalRage = "BNcr",
    ClarityPotion = "BIrm",
    CloakOfFlames = "BIcf",
    ClockwerkGoblin = "BNcg",
    Cloud = "Bclf",
    CloudEffect = "Xclf",
    ClusterRockets = "BNcs",
    ClusterRocketsEffect = "XNcs",
    ColdArrowsInfo = "Bcsi",
    ColdArrowsNonStacking = "BHca",
    ColdArrowsStacking = "Bcsd",
    ControlMagic = "Bcmg",
    CorrosiveBreath = "Bcor",
    Corruption = "BIcb",
    Cripple = "Bcri",
    Curse = "Bcrs",
    Cyclone = "Bcyc",
    CycloneExtra = "Bcy2",
    DarkConversion = "BNdc",
    DarkMinion = "BNdm",
    DeathAndDecay = "BUdd",
    DeathAndDecayEffect = "XUdd",
    Detected = "Bdet",
    DevotionAura = "BHad",
    Devour = "Bdvv",
    DevourCaster = "Bdig",
    Disease = "Bapl",
    DiseaseCloud = "Bplg",
    DivineShield = "BHds",
    Dizziness = "Bchd",
    Doom = "BNdo",
    DoomMinion = "BNdi",
    DrainLifeAndManaCaster = "Bdcb",
    DrainLifeAndManaTarget = "Bdtb",
    DrainLifeCaster = "Bdcl",
    DrainLifeTarget = "Bdtl",
    DrainManaCaster = "Bdcm",
    DrainManaTarget = "Bdtm",
    DrunkenHaze = "BNdh",
    Earthquake = "BOeq",
    EarthquakeCaster = "BOea",
    EarthquakeEffect = "XOeq",
    EatTree = "Beat",
    EnduranceAura = "BOae",
    EngineeringUpgrade = "BNeg",
    EnsnareAir = "Bena",
    EnsnareGeneral = "Bens",
    EnsnareGround = "Beng",
    EntanglingRoots = "BEer",
    EssenceOfBlight = "Brpl",
    FaerieFire = "Bfae",
    FeralSpirit = "BOsf",
    FlameStrike = "BHfs",
    FlameStrikeEffect = "XHfs",
    FlareEffect = "Xfla",
    ForceOfNature = "BEfn",
    Freeze = "Bfre",
    FreezingBreath = "Bfrz",
    Frenzy = "Bfzy",
    FrostArmor = "BUfa",
    Hawk = "BNsw",
    HeadhunterSpirit = "BIsh",
    Heal = "Bhea",
    HealReduction = "BIhm",
    HealingSpray = "BNhs",
    HealingSprayEffect = "XNhs",
    HealingWard = "Bhwd",
    HealingWardAura = "Boar",
    HeroDissipateEffect = "Xdis",
    Hex = "BOhx",
    HowlOfTerror = "BNht",
    Illusion = "BIil",
    Immolation = "BEim",
    ImmolationCaster = "BEia",
    Impale = "BUim",
    Incinerate = "BNic",
    Infernal = "BNin",
    InnerFire = "Binf",
    Invisibility = "Binv",
    InvisibilityExtra = "Bivs",
    Invulnerable = "Bvul",
    ItemChangeTimeOfDay = "XIct",
    ItemWeb = "BIwb",
    LavaSpawn = "BNlm",
    LightningShield = "Blsh",
    LightningShieldCaster = "Blsa",
    LiquidFire = "Bliq",
    ManaFlare = "Bmfl",
    ManaFlareExtra = "Bmfa",
    ManaRegenerationAura = "Barm",
    ManaShield = "BNms",
    MechanicalCritter = "Bmec",
    Metamorphosis = "BEme",
    Militia = "Bmil",
    MindRot = "BNmr",
    MirrorImage = "BOmi",
    Monsoon = "ANmd",
    MonsoonEffect = "XNmo",
    MonsterLure = "BImo",
    PandarenElemental = "BNef",
    Parasite = "BNpa",
    ParasiteMinion = "BNpm",
    PermanentImmolationNeutralHostile1 = "BNpi",
    PermanentImmolationNeutralHostile2 = "Bpig",
    PhaseShift = "Bpsh",
    Phoenix = "Bphx",
    PhoenixFire = "Bpxf",
    PocketFactory = "BNfy",
    PoisonInfo = "Bpsi",
    PoisonNonStacking = "Bpoi",
    PoisonStacking = "Bpsd",
    Polymorph = "Bply",
    Possession = "Bpos",
    PossessionCaster = "Bpoc",
    Purge = "Bprg",
    Quilbeast = "BNsq",
    RainOfChaosEffect = "XErc",
    RainOfFire = "BNrd",
    RainOfFireArea = "BNrf",
    RainOfFireEffect = "XErf",
    Reborn = "BIrb",
    Regeneration = "BIrl",
    ReincarnationEffect = "XOre",
    Rejuvenation = "Brej",
    RejuvenationItem = "BIrg",
    Replenish = "Brpb",
    RevealEffect = "Xbdt",
    Roar = "Broa",
    Sanctuary = "BNsa",
    Scout = "BEst",
    ScrollOfProtection = "Bdef",
    SentryWard = "Beye",
    ShadowStrike = "BEsh",
    SharedVision = "Bsha",
    ShockwaveCaster = "BOsh",
    Silence = "BNsi",
    SkeletalMinion = "Brai",
    Slam = "BCtc",
    Sleep = "BUsl",
    SleepPause = "BUsp",
    SleepStun = "BUst",
    Slow = "Bslo",
    SlowPoisonInfo = "Bssi",
    SlowPoisonNonStacking = "Bspo",
    SlowPoisonStacking = "Bssd",
    Slowed = "Bfro",
    SoulBurn = "BNso",
    SoulPreservation = "BNsl",
    SoulTheft = "BIsv",
    SpeedBonus = "Bspe",
    SpellShield = "BNss",
    Spiderling = "Bspa",
    SpikedCarapace = "BUts",
    SpiritLink = "Bspl",
    SpiritOfVengeance = "Bvng",
    SpiritTouch = "Brpm",
    Stampede = "BNst",
    StarfallEffect = "XEsf",
    StarfallTarget = "AEsd",
    StasisTrap = "Bstt",
    Stunned = "BSTN",
    StunnedPause = "BPSE",
    SummonedUnit = "BFig",
    TeleportReveal = "Btrv",
    ThornsAura = "BEah",
    ThunderClap = "BHtc",
    TornadoDamage = "Btdg",
    TornadoSlowAura = "Basl",
    TornadoSpin = "Btsp",
    TornadoSpinArea = "Btsa",
    TornadoTimedLife = "BNto",
    TranquilityEffect = "XEtq",
    TranquilityTarget = "AEtr",
    Transmute = "BNtm",
    TrueshotAura = "BEar",
    Ultravision = "Bult",
    UnholyAura = "BUau",
    UnholyFrenzy = "Buhf",
    Unsummon = "Buns",
    VampiricAura = "BUav",
    VampiricPotion = "BIpv",
    Vengeance = "BEsv",
    Volcano = "BNvc",
    VolcanoArea = "BNva",
    VolcanoEffect = "XNvc",
    WandOfShadowsight = "Bshs",
    WarClub = "Bgra",
    WarDrums = "Bakb",
    Ward = "BOwd",
    WaterElemental = "BHwe",
    WateryMinion = "BNwm",
    WebAir = "Bwea",
    WebGround = "Bweb",
    WindWalk = "BOwk"
}
export declare class BuffContainer extends Container<Buff> {
    game: Readonly<{
        [key in Buffs]: Readonly<Buff>;
    }>;
}
