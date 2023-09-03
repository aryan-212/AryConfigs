#!/bin/bash

   # Get the current status of Spotify
   status=$(playerctl --player=spotify status 2> /dev/null)

   # Check if Spotify is running and playing a song
   if [ "$status" = "Playing" ]; then
     artist=$(playerctl --player=spotify metadata artist)
     title=$(playerctl --player=spotify metadata title)
     echo -e " $artist - $title"
   elif [ "$status" = "Paused" ]; then
     echo -e " Paused"
   else
     echo -e ""
   fi