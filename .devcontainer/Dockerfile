ARG VARIANT="16-bullseye"
FROM mcr.microsoft.com/vscode/devcontainers/typescript-node:0-${VARIANT}

# trunk-ignore(hadolint/DL3004)
RUN tmp_file=$(mktemp) && \
        curl -fsSL https://trunk.io/releases/trunk -o "${tmp_file}" && \
        echo "Downloading Trunk Launcher... done" && \
        echo " Installing Trunk Launcher (requires sudo access)..." && \
        chmod +x "${tmp_file}" && \
        sudo mv "${tmp_file}" "/usr/local/bin/trunk"

