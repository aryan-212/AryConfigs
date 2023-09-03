#################################
#             Shadows           #
#################################

shadow = true;
shadow-radius = 7;
# shadow-opacity = .75
shadow-offset-x = -7;
shadow-offset-y = -7;
# shadow-red = 0
# shadow-green = 0
# shadow-blue = 0
# shadow-color = "#000000"
shadow-exclude = [
  "name = 'Notification'",
  "class_g = 'Conky'",
  "class_g ?= 'Notify-osd'",
  "class_g = 'Cairo-clock'",
  "_GTK_FRAME_EXTENTS@:c"
];
# clip-shadow-above = []
# shadow-exclude-reg = ""
 crop-shadow-to-monitor = true


#################################
#           Fading              #
#################################

fading = true;
fade-in-step = 0.04;
fade-out-step = 0.07;
# fade-delta = 10
# fade-exclude = []
# no-fading-openclose = false
# no-fading-destroyed-argb = false


#################################
#   Transparency / Opacity      #
#################################

inactive-opacity = 0.45;
# frame-opacity = 1.0
# inactive-opacity-override = false;
active-opacity = 0.73
inactive-dim = 0.4
#focus-exclude = [ "class_g = 'mpv'"  ];
# inactive-dim-fixed = 1.0
opacity-rule = ["90:class_g = 'Polybar'", "100:class_g = 'mpv'"
]


#################################
#           Corners             #
#################################

corner-radius = 20

# Exclude conditions for rounded corners.
rounded-corners-exclude = [
  "window_type = 'dock'",
  "window_type = 'desktop'"
];

#################################
#     Background-Blurring       #
#################################

blur-background = true
blur-method = "dual_kawase"
blur-strength = 12
blur-kern = "3x3box";

# Exclude conditions for background blur.
# blur-background-exclude = []
blur-background-exclude = [
  #"window_type = 'dock'",
  #"window_type = 'desktop'",
  #"_GTK_FRAME_EXTENTS@:c"
];


#################################
#       General Settings        #
#################################

vsync = true;
backend = "glx";
