/*
  AV Hub — link list
  ----------------------
  This is the only file you need to edit to add, remove or change links.
  Each section has a title, an accent colour (blue, orange, green, red, purple, teal)
  and a list of links. Each link has:
    name  – text shown on the page
    url   – where it goes
    color – (optional) tile colour used if the site's icon can't be loaded
    icon  – (optional) URL of a logo image to use instead of the site's own icon,
            or false to always show the coloured initials tile
    iconDomain – (optional) take the site icon from a different web address
            (handy when the link is a deep page on a site with a poor icon)
    tag   – (optional) small category label shown under the name, e.g. "Audio & DSP"
    fit   – (optional) "full" makes a square logo image fill the whole tile
  Links are shown A–Z automatically, so new ones can go anywhere in a list.
  Your own logo images go in the icons/ folder, e.g. icon: "icons/tradezone.png"
*/
window.AV_HUB = {
  title: "AV Hub",
  subtitle: "Supplier sites, deal registration, room designers and training portals in one place.",
  tag: "Audio Visual",
  version: "2.6",          // bump this when you make changes
  updated: "27 Oct 2026",  // and update the date
  author: "Andrew Scofield",
  sections: [
    {
      id: "suppliers",
      accent: "blue",
      title: "Supplier Site Links",
            links: [
        { name: "4Cabling", url: "https://www.4cabling.com.au" },
        { name: "Alloys", url: "https://www.alloys.com.au" },
        { name: "Amber Technology", url: "https://www.ambertech.com.au/home.aspx" },
        { name: "Audio Brands", url: "https://www.audiobrands.com.au", color: "#1a73c9" },
        { name: "Audio Visual Distributors", url: "https://www.avdistributors.com.au" },
        { name: "Australis Music Group", url: "https://www.australismusic.com.au" },
        { name: "AV Supply Group", url: "https://www.avsupplygroup.com.au", icon: "icons/av-supply-group.png", fit: "full" },
        { name: "Crestron Electronics", url: "https://www.crestron.com" , icon: "https://upload.wikimedia.org/wikipedia/en/7/72/Crestron_Electronics_logo.png" },
        { name: "Dicker Data", url: "https://www.dickerdata.com.au", color: "#000000" },
        { name: "DSTech", url: "https://www.dstech.net.au/" },
        { name: "Extron", url: "https://www.extron.com", color: "#0b3f8f" },
        { name: "Ingram Micro", url: "https://au.ingrammicro.com" , icon: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Ingram_Micro_logo_new.svg" },
        { name: "JB Hi-Fi Business", url: "https://www.jbhifi.business" , iconDomain: "www.jbhifi.com.au" },
        { name: "Leader Systems", url: "https://partner.leadersystems.com.au/Login.html", iconDomain: "www.leadersystems.com.au" },
        { name: "Lindy", url: "https://www.lindy.com.au" , iconDomain: "www.lindy.co.uk" },
        { name: "MadisonAV", url: "https://www.madisonav.com.au" },
        { name: "Midwich", url: "https://www.midwich.com.au" },
        { name: "MMT - Multimedia Technology", url: "https://www.mmt.com.au/" },
        { name: "NAS Online", url: "https://www.nas.solutions" },
        { name: "Production Audio Video Technology", url: "https://www.pavt.com.au" },
        { name: "Quantum Sphere", url: "https://www.qsphere.com.au" },
        { name: "Synnex Australia", url: "https://www.synnex.com.au" },
        { name: "Technical Audio Group", url: "https://www.tag.com.au" },
        { name: "Tradezone", url: "https://www.tradezone.com.au", color: "#14798a", icon: "icons/tradezone.png", fit: "full" },
        { name: "WBT - World's Best Technology", url: "https://www.wbt.com.au" },
        { name: "Westan - Audio Visual Distributors", url: "https://www.westan.com.au" },
        { name: "XIT Distribution", url: "https://www.xitdistribution.com.au" }


      ]
    },
    {
      id: "deal-reg",
      accent: "orange",
      title: "Deal Registration Links",
            collapsible: true,
      links: [
        { name: "Cisco Deal Registration", url: "https://www.cisco.com/c/en/us/partners/tools/deal-registration.html" , icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
        { name: "HP/Poly Deal Registration", url: "https://partner.hp.com" , icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/HP_logo_2025.svg" },
        { name: "Commbox Deal Registration", url: "https://www.commbox.io/deal-registration/", iconDomain: "www.commbox.com.au" },
        { name: "Logitech Deal Registration", url: "https://partners.logitech.com/English_AUS/", color: "#00f5d4" },
        { name: "Neat Deal Registration", url: "https://neat.no/partners/", color: "#5b2a9e" },
        { name: "Yealink Deal Registration", url: "https://www.yealink.com/vcs_opportunity_registration_pogram" , icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/Yealink_logo.png" }


      ]
    },
    {
      id: "room-designers",
      accent: "green",
      title: "Room Designer Links",
            links: [
        { name: "Cisco Video Room Calculator", url: "https://collabexperience.com" , icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
        { name: "Cisco Webex Control Hub", url: "https://admin.webex.com" , iconDomain: "www.webex.com" },
        { name: "Cisco Workspace Designer", url: "https://designer.webex.com/" , icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
        { name: "Crestron Collab Room Builder", url: "https://www.crestron.com/Products/Workspace-Solutions/Intelligent-Video/Tools/Room-Designer-Software" , icon: "https://upload.wikimedia.org/wikipedia/en/7/72/Crestron_Electronics_logo.png" },
        { name: "Logitech Room Designer", url: "https://configurator.logitech.com/", color: "#00f5d4" },
        { name: "Logitech Sync", url: "https://sync.logitech.com" , iconDomain: "hub.sync.logitech.com" },
        { name: "Projector Throw Calculator", url: "https://www.projectorcentral.com/projection-calculator-pro.cfm", color: "#120a2a", icon: "icons/projector-central.png", fit: "full" },
        { name: "QSC Reflect", url: "https://reflect.qsc.com" , iconDomain: "www.qsc.com" },
        { name: "Sennheiser Room Planner", url: "https://roomplanner.sennheiser.com/" , icon: "https://upload.wikimedia.org/wikipedia/commons/1/11/Sennheiser_logo_%282019%29.svg" }


      ]
    },
    {
      id: "training",
      accent: "red",
      title: "Training Portals",
            links: [
        { name: "AVIXA Audio Visual Training", url: "https://www.avixa.org/training", color: "#f47b20" },
        { name: "Biamp Training & Certification", url: "https://www.biamp.com/training", color: "#000000" },
        { name: "Cisco Learning Network", url: "https://learningnetwork.cisco.com" , icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
        { name: "Crestron Electronics", url: "https://www.crestron.com/Training-Certification", icon: "https://upload.wikimedia.org/wikipedia/en/7/72/Crestron_Electronics_logo.png" },
        { name: "Dante Training & Certification", url: "https://www.getdante.com/support/training-certification/", color: "#3a1f2a" },
        { name: "Extron", url: "https://www.extron.com/training/", color: "#0b3f8f" },
        { name: "HP/Poly", url: "https://www.hp.com/au-en/poly/training.html" , icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/HP_logo_2025.svg" },
        { name: "Logitech", url: "https://www.logitech.com/en-au/video-collaboration/resources/training.html", color: "#00f5d4" },
        { name: "MadisonAV Training", url: "https://www.madisonav.com.au/training" },
        { name: "NEAT", url: "https://neat.no/training/", color: "#5b2a9e" },
        { name: "NETGEAR Academy", url: "https://www.netgear.com/business/services/netgear-academy/" , icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Netgear_logo_2014.svg" },
        { name: "QSC", url: "https://training.qsc.com" , iconDomain: "www.qsc.com" },
        { name: "Yealink", url: "https://www.yealink.com/en/support/training" , icon: "https://upload.wikimedia.org/wikipedia/commons/9/98/Yealink_logo.png" },
        { name: "Zoom", url: "https://learning.zoom.us", color: "#0b5cff" }


      ]
    },
    {
      id: "brands",
      accent: "purple",
      title: "AV Brands",
      links: [
        { name: "Absen", url: "https://www.absen.com", tag: "Displays & Projection" },
        { name: "AMX", url: "https://www.amx.com", tag: "Control & Switching" },
        { name: "Appspace", url: "https://www.appspace.com", tag: "Digital Signage" },
        { name: "AtlasIED", url: "https://www.atlasied.com", tag: "Audio & DSP" },
        { name: "Atlona", url: "https://atlona.com", tag: "Control & Switching", icon: "icons/atlona.png", fit: "full" },
        { name: "Audinate Dante", url: "https://www.getdante.com/support/", tag: "Audio & DSP" },
        { name: "Audio-Technica", url: "https://www.audio-technica.com", tag: "Audio & DSP", icon: "https://upload.wikimedia.org/wikipedia/en/3/3f/Audio-Technica_logo.svg" },
        { name: "Aurora Multimedia", url: "https://www.auroramultimedia.com", tag: "Control & Switching" },
        { name: "AVer", url: "https://www.aver.com", tag: "Video Conferencing" },
        { name: "Barco", url: "https://www.barco.com", tag: "Collaboration & Networking" },
        { name: "BenQ", url: "https://www.benq.com", tag: "Displays & Projection", icon: "https://upload.wikimedia.org/wikipedia/commons/4/41/BenQ_wordmark.svg" },
        { name: "Biamp", url: "https://support.biamp.com", tag: "Audio & DSP", iconDomain: "www.biamp.com" },
        { name: "Blustream", url: "https://www.blustream.com.au/", tag: "Control & Switching", color: "#0a5fb4" },
        { name: "Bose Professional", url: "https://www.boseprofessional.com", tag: "Audio & DSP" },
        { name: "BrightSign", url: "https://www.brightsign.biz", tag: "Digital Signage" },
        { name: "Cisco", url: "https://www.cisco.com/c/en/us/support/collaboration-endpoints/index.html", tag: "Video Conferencing", icon: "https://upload.wikimedia.org/wikipedia/commons/0/08/Cisco_logo_blue_2016.svg" },
        { name: "ClearOne", url: "https://www.clearone.com", tag: "Audio & DSP", color: "#0a4a8c" },
        { name: "Clevertouch", url: "https://www.clevertouch.com", tag: "Displays & Projection" },
        { name: "CommBox", url: "https://www.commbox.com.au/interactive-touchscreens", tag: "Displays & Projection" },
        { name: "Crestron", url: "https://www.crestron.com/Support", tag: "Control & Switching", icon: "https://upload.wikimedia.org/wikipedia/en/7/72/Crestron_Electronics_logo.png" },
        { name: "Epson", url: "https://www.epson.com.au/support/", tag: "Displays & Projection", icon: "https://upload.wikimedia.org/wikipedia/commons/5/59/Epson_logo.svg" },
        { name: "Extron", url: "https://www.extron.com/download/", tag: "Control & Switching", color: "#0b3f8f" },
        { name: "HP / Poly", url: "https://www.hp.com/au-en/services/workforce-solutions/communication-collaboration/support.html", tag: "Video Conferencing", icon: "https://upload.wikimedia.org/wikipedia/commons/0/05/HP_logo_2025.svg" },
        { name: "Jabra", url: "https://www.jabra.com.au", tag: "Video Conferencing" },
        { name: "JBL Professional", url: "https://jblpro.com", tag: "Audio & DSP" },
        { name: "Kramer", url: "https://www.kramerav.com", tag: "Control & Switching" },
        { name: "Lenovo", url: "https://www.lenovo.com/au/en/", tag: "Video Conferencing", icon: "https://upload.wikimedia.org/wikipedia/commons/0/01/Lenovo_logo_%282015_onwards%29_2.svg" },
        { name: "LG Business Solutions", url: "https://www.lg.com/au/business", tag: "Displays & Projection" },
        { name: "Lightware", url: "https://lightware.com", tag: "Control & Switching" },
        { name: "Listen Technologies", url: "https://www.listentech.com", tag: "Audio & DSP" },
        { name: "Logitech", url: "https://support.logi.com", tag: "Video Conferencing", iconDomain: "www.logitech.com" },
        { name: "MAXHUB", url: "https://www.maxhub.com", tag: "Displays & Projection" },
        { name: "Microsoft Teams Rooms", url: "https://learn.microsoft.com/en-us/microsoftteams/rooms/", tag: "Video Conferencing" },
        { name: "Neat", url: "https://support.neat.no", tag: "Video Conferencing" },
        { name: "NETGEAR AV", url: "https://www.netgear.com/support/", tag: "Collaboration & Networking", icon: "https://upload.wikimedia.org/wikipedia/commons/2/29/Netgear_logo_2014.svg" },
        { name: "Panasonic Connect", url: "https://connect.panasonic.com", tag: "Displays & Projection" },
        { name: "Planar", url: "https://www.planar.com", tag: "Displays & Projection" },
        { name: "Q-SYS / QSC", url: "https://www.qsys.com/products-solutions/q-sys/resources", tag: "Audio & DSP", iconDomain: "www.qsc.com" },
        { name: "Samsung Business", url: "https://www.samsung.com/au/business/support/", tag: "Displays & Projection" },
        { name: "Sennheiser", url: "https://www.sennheiser.com/en-au", tag: "Audio & DSP", icon: "https://upload.wikimedia.org/wikipedia/commons/1/11/Sennheiser_logo_%282019%29.svg" },
        { name: "Sharp NEC Display Solutions", url: "https://sharpnecdisplays.us/downloads", tag: "Displays & Projection", icon: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Logo_of_the_Sharp_Corporation.svg" },
        { name: "Shure", url: "https://www.shure.com/en-US/support/downloads", tag: "Audio & DSP", icon: "https://upload.wikimedia.org/wikipedia/commons/5/5d/Shure_Logo_2024.svg" },
        { name: "SMART Technologies", url: "https://www.smarttech.com", tag: "Displays & Projection" },
        { name: "Sony Professional", url: "https://pro.sony/en_AU/support-services", tag: "Displays & Projection" },
        { name: "Turtle AV", url: "https://www.turtleav.com", tag: "Displays & Projection" },
        { name: "ViewSonic", url: "https://www.viewsonic.com/au/", tag: "Displays & Projection", icon: "https://upload.wikimedia.org/wikipedia/commons/b/b0/ViewSonic_logo.svg" },
        { name: "VuWall", url: "https://www.vuwall.com", tag: "Control & Switching" },
        { name: "Williams AV", url: "https://williamsav.com", tag: "Audio & DSP" },
        { name: "Yamaha Professional Audio", url: "https://au.yamaha.com/en/products/proaudio/index.html", tag: "Audio & DSP", iconDomain: "au.yamaha.com" },
        { name: "Yealink", url: "https://support.yealink.com", tag: "Video Conferencing" },
        { name: "Zoom Rooms", url: "https://support.zoom.com", tag: "Video Conferencing" }


      ]
    }
  ]
};
