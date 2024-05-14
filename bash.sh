#!/bin/bash
install_php() {
    php_version=$1
    echo "Checking if PHP $php_version is installed..."
    if php -v | grep -q "PHP $php_version"; then
        echo "PHP $php_version is already installed."
    else
        echo "Installing PHP $php_version..."
        sudo add-apt-repository ppa:ondrej/php -y
        sudo apt update
        sudo apt install php$php_version -y
    fi
}

install_node() {
    node_version=$1
    echo "Checking if Node.js $node_version is installed..."
    if command -v node &>/dev/null && node -v | grep -q "^v$node_version"; then
        echo "Node.js $node_version is already installed."
    else
        echo "Installing Node.js $node_version..."
        curl -o- https://raw.githubusercontent.com/nvm-sh/nvm/v0.39.0/install.sh | bash
        source ~/.nvm/nvm.sh
        nvm install $node_version
        bash
    fi
}

echo "Do you want to install PHP? (yes/no):"
read install_php_choice

if [[ "$install_php_choice" == "yes" ]]; then
    echo "Please Enter the version of PHP you want to install (e.g., 7.4, 8.1):"
    read php_version
    install_php "$php_version"
fi

echo "Do you want to install Node.js? (yes/no):"
read install_node_choice

if [[ "$install_node_choice" == "yes" ]]; then
    echo "Please Enter the version of Node.js you want to install (e.g., 12, 14):"
    read node_version
    install_node "$node_version"
fi