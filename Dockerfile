FROM node:18

WORKDIR /usr/src/app

COPY . ./
RUN npm install

EXPOSE 3000

ENV HOST=0.0.0.0
ENV PORT=3000
ENV NODE_ENV=rc

RUN npm run build
# RUN npm prune

# CMD [ "node", ".output/server/index.mjs" ]
CMD ["npm", "run", "build"]
CMD ["npm", "run", "start"]