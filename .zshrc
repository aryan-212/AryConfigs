# Enable Powerlevel10k instant prompt. Should stay close to the top of ~/.zshrc.
# Initialization code that may require console input (password prompts, [y/n]
# confirmations, etc.) must go above this block; everything else may go below.
if [[ -r "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh" ]]; then
  source "${XDG_CACHE_HOME:-$HOME/.cache}/p10k-instant-prompt-${(%):-%n}.zsh"
fi

# If you come from bash you might have to change your $PATH.
# export PATH=$HOME/bin:/usr/local/bin:$PATH

# Path to your oh-my-zsh installation.
export ZSH=$HOME/.oh-my-zsh

# Set name of the theme to load --- if set to "random", it will
# load a random theme each time oh-my-zsh is loaded, in which case,
# to know which specific one was loaded, run: echo $RANDOM_THEME
# See https://github.com/ohmyzsh/ohmyzsh/wiki/Themes
ZSH_THEME="archcraft"

# Set list of themes to pick from when loading at random
# Setting this variable when ZSH_THEME="archcraft"
# a theme from this variable instead of looking in $ZSH/themes/
# If set to an empty array, this variable will have no effect.
# ZSH_THEME_RANDOM_CANDIDATES=( "robbyrussell" "agnoster" )

# Uncomment the following line to use case-sensitive completion.
# CASE_SENSITIVE="true"

# Uncomment the following line to use hyphen-insensitive completion.
# Case-sensitive completion must be off. _ and - will be interchangeable.
# HYPHEN_INSENSITIVE="true"

# Uncomment one of the following lines to change the auto-update behavior
zstyle ':omz:update' mode disabled  # disable automatic updates
# zstyle ':omz:update' mode auto      # update automatically without asking
# zstyle ':omz:update' mode reminder  # just remind me to update when it's time

# Uncomment the following line to change how often to auto-update (in days).
# zstyle ':omz:update' frequency 13

# Uncomment the following line if pasting URLs and other text is messed up.
# DISABLE_MAGIC_FUNCTIONS="true"

# Uncomment the following line to disable colors in ls.
# DISABLE_LS_COLORS="true"

# Uncomment the following line to disable auto-setting terminal title.
# DISABLE_AUTO_TITLE="true"

# Uncomment the following line to enable command auto-correction.
# ENABLE_CORRECTION="true"

# Uncomment the following line to display red dots whilst waiting for completion.
# You can also set it to another string to have that shown instead of the default red dots.
# e.g. COMPLETION_WAITING_DOTS="%F{yellow}waiting...%f"
# Caution: this setting can cause issues with multiline prompts in zsh < 5.7.1 (see #5765)
# COMPLETION_WAITING_DOTS="true"

# Uncomment the following line if you want to disable marking untracked files
# under VCS as dirty. This makes repository status check for large repositories
# much, much faster.
# DISABLE_UNTRACKED_FILES_DIRTY="true"

# Uncomment the following line if you want to change the command execution time
# stamp shown in the history command output.
# You can set one of the optional three formats:
# "mm/dd/yyyy"|"dd.mm.yyyy"|"yyyy-mm-dd"
# or set a custom format using the strftime function format specifications,
# see 'man strftime' for details.
# HIST_STAMPS="mm/dd/yyyy"

# Would you like to use another custom folder than $ZSH/custom?
# ZSH_CUSTOM=/path/to/new-custom-folder

# Which plugins would you like to load?
# Standard plugins can be found in $ZSH/plugins/
# Custom plugins may be added to $ZSH_CUSTOM/plugins/
# Example format: plugins=(rails git textmate ruby lighthouse)
# Add wisely, as too many plugins slow down shell startup.
plugins=(git web-search sudo)

source $ZSH/oh-my-zsh.sh

# User configuration

# export MANPATH="/usr/local/man:$MANPATH"

# You may need to manually set your language environment
# export LANG=en_US.UTF-8

# Preferred editor for local and remote sessions
# if [[ -n $SSH_CONNECTION ]]; then
#   export EDITOR='vim'
# else
#   export EDITOR='mvim'
# fi

# Compilation flags
# export ARCHFLAGS="-arch x86_64"

# Set personal aliases, overriding those provided by oh-my-zsh libs,
# plugins, and themes. Aliases can be placed here, though oh-my-zsh
# users are encouraged to define aliases within the ZSH_CUSTOM folder.
# For a full list of active aliases, run `alias`.
#
# Example aliases
# alias zshconfig="mate ~/.zshrc"
# alias ohmyzsh="mate ~/.oh-my-zsh"

# On-demand rehash
zshcache_time="$(date +%s%N)"

autoload -Uz add-zsh-hook

rehash_precmd() {
  if [[ -a /var/cache/zsh/pacman ]]; then
    local paccache_time="$(date -r /var/cache/zsh/pacman +%s%N)"
    if (( zshcache_time < paccache_time )); then
      rehash
      zshcache_time="$paccache_time"
    fi
  fi
}

add-zsh-hook -Uz precmd rehash_precmd

# omz
alias c='code'
alias zshconfig="geany ~/.zshrc"
alias ohmyzsh="thunar ~/.oh-my-zsh"
alias watch="lobster -i"
alias tell="tgpt -m"
alias contin="lobster -i -c"
alias ani="jerry -i"
# ls
alias l='ls -lh'
alias ll='ls -lah'
alias la='ls -A'
alias lm='ls -m'
alias lr='ls -R'
alias lg='ls -l --group-directories-first'
alias makerepo='create_private_repo() { \
  local repo_name="$1"; \
  if [ -z "$repo_name" ]; then \
    echo "Usage: makerepo <repo_name>"; \
  else \
    curl -H "Authorization: token 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" https://api.github.com/user/repos -d "{\"name\":\"$repo_name\", \"private\": true}"; \
  fi \
}; create_private_repo'
alias v='nvim'

# git
alias gcl='git clone --depth 1'
alias gi='git init'
alias ga='git add'
alias gc='git commit -m'
alias gp='git push origin master'
#alias gitlink='git remote set-url origin https://aryan-212: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@github.com/aryan-212/repo_name.git'
alias gitlink='gitlink() {
    local repo_name="$1"
    git remote add origin "https://aryan-212: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@github.com/aryan-212/$repo_name.git"
}; gitlink'
alias fork="fork_hyprland"
function fork_hyprland {
    if [ $# -ne 2 ]; then
        echo "Usage: fork <repo_owner> <repository_name>"
        return 1
    fi

    GITHUB_USERNAME="aryan-212"
    ACCESS_TOKEN="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"
    
    REPO_OWNER="$1"
    REPO_NAME="$2"

    # Use curl to fork the repository
    curl -X POST -u "$GITHUB_USERNAME:$ACCESS_TOKEN" "https://api.github.com/repos/$REPO_OWNER/$REPO_NAME/forks"

    if [ $? -eq 0 ]; then
        echo "Forked $REPO_NAME from $REPO_OWNER into your account."
    else
        echo "Failed to fork $REPO_NAME."
        return 1
    fi
}
alias delrepo='repo_name=$1 curl -X DELETE -u aryan-212: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 https://api.github.com/repos/aryan-212/$repo_name'




source ~/powerlevel10k/powerlevel10k.zsh-theme


# To customize prompt, run `p10k configure` or edit ~/.p10k.zsh.
[[ ! -f ~/.p10k.zsh ]] || source ~/.p10k.zsh
source /home/aryan/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh
source ~/.zsh/zsh-autosuggestions/zsh-autosuggestions.zsh
export PATH=$PATH:/home/aryan/.spicetify
