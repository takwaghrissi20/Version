# Build stage
FROM node:lts-alpine as build-stage
WORKDIR /app

# Copie uniquement package.json et package-lock.json pour installer les dépendances
COPY package*.json ./

# Installer les dépendances avec l'option legacy-peer-deps
RUN npm install --legacy-peer-deps

# Copier le reste du code
COPY . .

# Augmenter la limite de mémoire allouée à Node.js pour la construction
ENV NODE_OPTIONS="--max-old-space-size=4096"

# Construire l'application
RUN npm run build

# Installer Serve pour servir l'application
RUN npm install -g serve

# Exposer le port
EXPOSE 3000

# Démarrer le serveur
CMD ["serve", "-s", "dist"]
