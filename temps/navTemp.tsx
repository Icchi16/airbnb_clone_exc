import Image from "next/image";
import { ScrollableTabs } from "./footerTemp";
import { useRouter } from "next/navigation";

export const navCategory: ScrollableTabs = [
  {
    id: "rooms",
    text: "Rooms",
    icon: (
      <Image alt="rooms" width={25} height={20} src="/navIcons/rooms.jpg" />
    ),
  },
  {
    id: "countryside",
    text: "Countryside",
    icon: (
      <Image
        alt="countryside"
        width={25}
        height={20}
        src="/navIcons/countryside.jpg"
      />
    ),
  },
  {
    id: "trending",
    text: "Trending",
    icon: (
      <Image
        alt="trending"
        width={25}
        height={20}
        src="/navIcons/trending.jpg"
      />
    ),
  },
  {
    id: "beachfront",
    text: "Beachfront",
    icon: (
      <Image
        alt="beachfront"
        width={25}
        height={20}
        src="/navIcons/beachfront.jpg"
      />
    ),
  },
  {
    id: "windmills",
    text: "Windmills",
    icon: (
      <Image
        alt="windmills"
        width={25}
        height={20}
        src="/navIcons/windmills.jpg"
      />
    ),
  },
  {
    id: "amazing_views",
    text: "Amazing views",
    icon: (
      <Image
        alt="amazing views"
        width={25}
        height={20}
        src="/navIcons/amazing-views.jpg"
      />
    ),
  },
  {
    id: "amazing_pools",
    text: "Amazing pools",
    icon: (
      <Image
        alt="amazing pools"
        width={25}
        height={20}
        src="/navIcons/amazing-pools.jpg"
      />
    ),
  },
  {
    id: "tiny_homes",
    text: "Tiny homes",
    icon: (
      <Image
        alt="tiny homes"
        width={25}
        height={20}
        src="/navIcons/tiny-homes.jpg"
      />
    ),
  },

  {
    id: "mansions",
    text: "Mansions",
    icon: (
      <Image
        alt="mansions"
        width={25}
        height={20}
        src="/navIcons/mansions.jpg"
      />
    ),
  },

  {
    id: "play",
    text: "Play",
    icon: <Image alt="play" width={25} height={20} src="/navIcons/play.jpg" />,
  },
  {
    id: "containers",
    text: "Containers",
    icon: (
      <Image
        alt="containers"
        width={25}
        height={20}
        src="/navIcons/containers.jpg"
      />
    ),
  },
  {
    id: "treehouses",
    text: "Treehouses",
    icon: (
      <Image
        alt="treehouses"
        width={25}
        height={20}
        src="/navIcons/treehouses.jpg"
      />
    ),
  },
  {
    id: "golfing",
    text: "Golfing",
    icon: (
      <Image alt="golfing" width={25} height={20} src="/navIcons/golfing.jpg" />
    ),
  },
  {
    id: "creative_spaces",
    text: "Creative spaces",
    icon: (
      <Image
        alt="creative spaces"
        width={25}
        height={20}
        src="/navIcons/creative-spaces.jpg"
      />
    ),
  },
  {
    id: "boats",
    text: "Boats",
    icon: (
      <Image alt="boats" width={25} height={20} src="/navIcons/boats.jpg" />
    ),
  },
  {
    id: "design",
    text: "Design",
    icon: (
      <Image alt="design" width={25} height={20} src="/navIcons/design.jpg" />
    ),
  },
  {
    id: "dammusi",
    text: "Dammusi",
    icon: (
      <Image alt="dammusi" width={25} height={20} src="/navIcons/dammusi.jpg" />
    ),
  },
  {
    id: "caves",
    text: "Caves",
    icon: (
      <Image alt="caves" width={25} height={20} src="/navIcons/caves.jpg" />
    ),
  },
  {
    id: "omg",
    text: "OMG!",
    icon: <Image alt="omg" width={25} height={20} src="/navIcons/omg.jpg" />,
  },
  {
    id: "grand_pianos",
    text: "Grand pianos",
    icon: (
      <Image
        alt="grand pianos"
        width={25}
        height={20}
        src="/navIcons/grand-pianos.jpg"
      />
    ),
  },
  {
    id: "luxes",
    text: "Luxes",
    icon: (
      <Image alt="luxes" width={25} height={20} src="/navIcons/luxes.jpg" />
    ),
  },

  {
    id: "cabins",
    text: "Cabins",
    icon: (
      <Image alt="cabins" width={25} height={20} src="/navIcons/cabins.jpg" />
    ),
  },
  {
    id: "iconic_cities",
    text: "Iconic cities",
    icon: (
      <Image
        alt="iconic cities"
        width={25}
        height={20}
        src="/navIcons/iconic-cities.jpg"
      />
    ),
  },
  {
    id: "beach",
    text: "Beach",
    icon: (
      <Image alt="beach" width={25} height={20} src="/navIcons/beach.jpg" />
    ),
  },
  {
    id: "camping",
    text: "Camping",
    icon: (
      <Image alt="camping" width={25} height={20} src="/navIcons/camping.jpg" />
    ),
  },
  {
    id: "houseboats",
    text: "Houseboats",
    icon: (
      <Image
        alt="houseboats"
        width={25}
        height={20}
        src="/navIcons/houseboats.jpg"
      />
    ),
  },
  {
    id: "farms",
    text: "Farms",
    icon: (
      <Image alt="farms" width={25} height={20} src="/navIcons/farms.jpg" />
    ),
  },
  {
    id: "national_parks",
    text: "National parks",
    icon: (
      <Image
        alt="national parks"
        width={25}
        height={20}
        src="/navIcons/national-parks.jpg"
      />
    ),
  },
  {
    id: "top_of_the_world",
    text: "Top of the world",
    icon: (
      <Image
        alt="top of the world"
        width={25}
        height={20}
        src="/navIcons/top-of-the-world.jpg"
      />
    ),
  },
  {
    id: "lake",
    text: "Lake",
    icon: <Image alt="lake" width={25} height={20} src="/navIcons/lake.jpg" />,
  },
  {
    id: "historical_homes",
    text: "Historical homes",
    icon: (
      <Image
        alt="historical homes"
        width={25}
        height={20}
        src="/navIcons/historical-homes.jpg"
      />
    ),
  },
  {
    id: "lakefront",
    text: "Lakefront",
    icon: (
      <Image
        alt="lakefront"
        width={25}
        height={20}
        src="/navIcons/lakefront.jpg"
      />
    ),
  },
  {
    id: "surfing",
    text: "Surfing",
    icon: (
      <Image alt="surfing" width={25} height={20} src="/navIcons/surfing.jpg" />
    ),
  },
  {
    id: "arctic",
    text: "Arctic",
    icon: (
      <Image alt="arctic" width={25} height={20} src="/navIcons/arctic.jpg" />
    ),
  },
  {
    id: "castles",
    text: "Castles",
    icon: (
      <Image alt="castles" width={25} height={20} src="/navIcons/castles.jpg" />
    ),
  },
  {
    id: "tropical",
    text: "Tropical",
    icon: (
      <Image
        alt="tropical"
        width={25}
        height={20}
        src="/navIcons/tropical.jpg"
      />
    ),
  },
  {
    id: "hanoks",
    text: "Hanoks",
    icon: (
      <Image alt="hanoks" width={25} height={20} src="/navIcons/hanoks.jpg" />
    ),
  },
  {
    id: "domes",
    text: "Domes",
    icon: (
      <Image alt="domes" width={25} height={20} src="/navIcons/domes.jpg" />
    ),
  },
  {
    id: "a_frames",
    text: "A-frames",
    icon: (
      <Image
        alt="a-frames"
        width={25}
        height={20}
        src="/navIcons/a-frames.jpg"
      />
    ),
  },
  {
    id: "earth_homes",
    text: "Earth homes",
    icon: (
      <Image
        alt="earth homes"
        width={25}
        height={20}
        src="/navIcons/earth-homes.jpg"
      />
    ),
  },
  {
    id: "minsus",
    text: "Minsus",
    icon: (
      <Image alt="minsus" width={25} height={20} src="/navIcons/minsus.jpg" />
    ),
  },
  {
    id: "new",
    text: "New",
    icon: <Image alt="new" width={25} height={20} src="/navIcons/new.jpg" />,
  },
  {
    id: "bed_n_breakfasts",
    text: "Bed & breakfasts",
    icon: (
      <Image
        alt="bed & breakfasts"
        width={25}
        height={20}
        src="/navIcons/bed-n-breakfasts.jpg"
      />
    ),
  },
  {
    id: "islands",
    text: "Islands",
    icon: (
      <Image alt="islands" width={25} height={20} src="/navIcons/islands.jpg" />
    ),
  },
  {
    id: "skiing",
    text: "Skiing",
    icon: (
      <Image alt="skiing" width={25} height={20} src="/navIcons/skiing.jpg" />
    ),
  },
  {
    id: "vineyards",
    text: "Vineyards",
    icon: (
      <Image
        alt="vineyards"
        width={25}
        height={20}
        src="/navIcons/vineyards.jpg"
      />
    ),
  },
  {
    id: "campers",
    text: "Campers",
    icon: (
      <Image alt="campers" width={25} height={20} src="/navIcons/campers.jpg" />
    ),
  },
  {
    id: "cycladic_homes",
    text: "Cycladic homes",
    icon: (
      <Image
        alt="cycladic homes"
        width={25}
        height={20}
        src="/navIcons/cycladic-homes.jpg"
      />
    ),
  },
  {
    id: "chefs_kitchens",
    text: "Chef's kitchens",
    icon: (
      <Image
        alt="chef's kitchens"
        width={25}
        height={20}
        src="/navIcons/chefs-kitchens.jpg"
      />
    ),
  },
  {
    id: "ryokans",
    text: "Ryokans",
    icon: (
      <Image alt="ryokans" width={25} height={20} src="/navIcons/ryokans.jpg" />
    ),
  },
  {
    id: "casas_particulares",
    text: "Casas particulares",
    icon: (
      <Image
        alt="casas particulares"
        width={25}
        height={20}
        src="/navIcons/casas-particulares.jpg"
      />
    ),
  },
  {
    id: "shepherds_huts",
    text: "Shepherd's huts",
    icon: (
      <Image
        alt="shepherd's huts"
        width={25}
        height={20}
        src="/navIcons/shepherds-huts.jpg"
      />
    ),
  },
  {
    id: "desert",
    text: "Desert",
    icon: (
      <Image
        alt="desert"
        width={25}
        height={20}
        src="/navIcons/desert.jpg"
      />
    ),
  },
  {
    id: "barns",
    text: "Barns",
    icon: (
      <Image
        alt="barns"
        width={25}
        height={20}
        src="/navIcons/barns.jpg"
      />
    ),
  },
  {
    id: "towers",
    text: "Towers",
    icon: (
      <Image
        alt="towers"
        width={25}
        height={20}
        src="/navIcons/towers.jpg"
      />
    ),
  },
  {
    id: "yurts",
    text: "Yurts",
    icon: (
      <Image
        alt="yurts"
        width={25}
        height={20}
        src="/navIcons/yurts.jpg"
      />
    ),
  },
  {
    id: "off_the_grid",
    text: "Off-the-grid",
    icon: (
      <Image
        alt="off-the-grid"
        width={25}
        height={20}
        src="/navIcons/off-the-grid.jpg"
      />
    ),
  },
  {
    id: "adapted",
    text: "Adapted",
    icon: (
      <Image
        alt="adapted"
        width={25}
        height={20}
        src="/navIcons/adapted.jpg"
      />
    ),
  },
  {
    id: "ski_in_out",
    text: "Ski-in/out",
    icon: (
      <Image
        alt="ski-in/out"
        width={25}
        height={20}
        src="/navIcons/ski-in-out.jpg"
      />
    ),
  },
  {
    id: "trulli",
    text: "Trulli",
    icon: (
      <Image
        alt="trulli"
        width={25}
        height={20}
        src="/navIcons/trulli.jpg"
      />
    ),
  },
  {
    id: "riads",
    text: "Riads",
    icon: (
      <Image
        alt="riads"
        width={25}
        height={20}
        src="/navIcons/riads.jpg"
      />
    ),
  },
];
