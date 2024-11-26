# Introduction

Docker is an open-source technology that makes it easy to build, test, and deploy applications. With Docker, you can ship your applications in a container environment that houses everything your application needs to run, from libraries to system tools, configuration files, code, dependencies, and runtime.

Simply put, Docker allows you to ship, test, and deploy your applications in any environment without worrying about incompatible issues regardless of the machine’s configuration settings.

---

# Why Docker

Here are some reasons why Docker is useful:

- **Portability**:  
  Docker containers can be used across different infrastructure environments, such as public and private clouds, and on-premises data centers.
  
- **Isolation**:  
  Docker containers isolate applications from each other and from the primary system. This makes it easier to monitor an application's resource usage and keeps the software stack clean.
  
- **Security**:  
  Docker containers are more secure than regular apps by default. Containers only include essential components, which reduces vulnerabilities.
  
- **Faster Development and Deployment**:  
  Docker automates repetitive tasks, saving time and resources.
  
- **Scalability and Flexibility**:  
  Docker is built on containerization technology, making it scalable and flexible.

---

# Docker Container Overview

A Docker container is a lightweight, executable package of software that contains all the components needed to run an application.

- **Code**: The application's code.  
- **Dependencies**: The application's dependencies.  
- **Libraries**: The application's libraries.  

Docker containers are portable and can run on any system with a Linux or Windows operating system. They offer several benefits:

- **Lightweight**:  
  Containers share the machine's OS system kernel, so they don't require an OS per application.
  
- **Secure**:  
  Applications are safer in containers.
  
- **Consistent**:  
  Containers ensure that applications run consistently across different environments.
  
- **Fast**:  
  Containers eliminate friction between development, QA, and production environments, enabling teams to ship software faster.

## Docker Container Commands

| Command                                   | Description                                              |
|-------------------------------------------|----------------------------------------------------------|
| `docker ps`                               | Lists all running containers.                           |
| `docker ps -a`                            | Lists all containers, including stopped ones.           |
| `docker run <image>`                      | Creates and starts a container from an image.           |
| `docker run -it <image>`                  | Starts a container interactively (e.g., a shell).       |
| `docker start <container-id/name>`        | Starts a stopped container.                             |
| `docker stop <container-id/name>`         | Stops a running container.                              |
| `docker restart <container-id/name>`      | Restarts a container.                                   |
| `docker rm <container-id/name>`           | Removes a stopped container.                            |
| `docker exec -it <container-id> <command>`| Executes a command inside a running container.          |
| `docker logs <container-id/name>`         | Displays logs from a container.                         |
| `docker inspect <container-id/name>`      | Provides detailed information about a container.        |
| `docker cp <source> <dest>`               | Copies files between a container and the host.          |
| `docker rename <old-name> <new-name>`     | Renames a container.                                    |

---

# Docker Registry Overview

A Docker registry is a centralized system for storing and distributing Docker images:

- **What It Stores**:  
  Docker images are self-contained packages that contain everything needed to run an application.
  
- **How It's Organized**:  
  Docker registries are organized into repositories, which hold all versions of a specific image.
  
- **How It's Used**:  
  Developers can:  
  - **Pull Images**: Fetch images from the registry to their local environment.  
  - **Push Images**: Upload images they want to store in a registry.  
  - **Manage Versions**: Use tags to differentiate between versions of an image.

# Docker Registry Commands

Docker registries are used to store and distribute Docker images. Below is a table of commonly used commands to interact with Docker registries.

| Command                                      | Description                                                                 |
|----------------------------------------------|-----------------------------------------------------------------------------|
| `docker pull <image-name>`                   | Downloads an image from a registry to the local environment.               |
| `docker push <image-name>`                   | Uploads an image from the local environment to a registry.                 |
| `docker tag <image-id> <repository-name>:<tag>` | Tags a local image with a repository name and tag for pushing to a registry.|
| `docker login`                               | Logs in to a Docker registry (e.g., Docker Hub).                           |
| `docker logout`                              | Logs out from a Docker registry.                                           |
| `docker search <image-name>`                 | Searches for images in a public Docker registry like Docker Hub.           |
| `docker inspect <image-name>`                | Displays detailed information about an image, including its registry details. |
| `docker rmi <image-name>`                    | Removes an image from the local environment.                               |
| `docker images`                              | Lists all images in the local environment, including those pulled from registries. |

---

# Dockerfile Overview

A **Dockerfile** is a text file containing instructions to build a Docker image. Each instruction specifies how to configure the image, such as which base image to use, what dependencies to install, and how to run the application.

## Example Dockerfile

```dockerfile
# Use Python as the base image
FROM python:3.9-slim

# Set environment variables
ENV PYTHONDONTWRITEBYTECODE=1
ENV PYTHONUNBUFFERED=1

# Set the working directory
WORKDIR /app

# Copy application files
COPY requirements.txt /app/
COPY . /app/

# Install dependencies
RUN pip install --no-cache-dir -r requirements.txt

# Expose application port
EXPOSE 8000

# Define the command to run the app
CMD ["python", "app.py"]
```

---
##  Docker Volumes

1. **Data Persistence**:  
   Volumes retain data even if the container is deleted or restarted. For example, databases or application logs can be stored persistently.

2. **Container Independence**:  
   Volumes are managed independently of containers, allowing data sharing and reuse across different containers or application instances.

3. **Performance**:  
   Volumes are optimized by Docker for better I/O performance compared to bind mounts, especially on non-Linux platforms.

4. **Backup and Restore**:  
   Data stored in volumes can be easily backed up and restored, ensuring data safety and continuity.

5. **Simplified Management**:  
   Docker manages volumes, making them easier to use compared to manually handling filesystem directories or bind mounts.

# Docker Volume Commands

Docker volumes are used to persist data outside of containers, providing storage that can be shared or reused between containers. Below is a table of commonly used Docker volume commands.

| Command                                       | Description                                                                     |
|-----------------------------------------------|---------------------------------------------------------------------------------|
| `docker volume create <volume-name>`          | Creates a new volume.                                                           |
| `docker volume ls`                            | Lists all Docker volumes available in the system.                               |
| `docker volume inspect <volume-name>`         | Provides detailed information about a specific volume.                          |
| `docker volume rm <volume-name>`              | Removes a specified volume from the system.                                     |
| `docker volume prune`                         | Removes all unused volumes (volumes not referenced by any containers).          |
| `docker run -v <volume-name>:<container-path>` | Mounts a volume into a container.                                               |
| `docker cp <container-id>:<container-path> <host-path>` | Copies files from a container volume to the host system.                       |
| `docker cp <host-path> <container-id>:<container-path>` | Copies files from the host system to a container volume.                       |

---
# Docker Mount Binds

Mount Binds in Docker allow you to mount a specific file or directory from the host machine into a container, enabling data sharing between the host and the container. This is different from Docker volumes, which are managed by Docker, while binds provide a direct link to the filesystem of the host.

## Docker Bind Mount Commands

| Command                                                           | Description                                                               |
|-------------------------------------------------------------------|---------------------------------------------------------------------------|
| `docker run -v <host-path>:<container-path>`                       | Mounts a host directory to a container.                                   |
| `docker run -v <host-file>:<container-file>`                       | Mounts a specific host file to a container file.                          |
| `docker inspect <container-id>`                                    | Inspect a container and view the mounted bind paths.                      |
| `docker cp <host-path> <container-id>:<container-path>`            | Copy files between host and container. (For bind mounts or other volumes) |
| `docker run --mount type=bind,source=<host-path>,target=<container-path>` | Mount a host directory into a container using `--mount` syntax.           |


## Key Differences Between Bind Mounts and Volumes

### Bind Mounts:
Bind mounts link a specific file or directory on the host filesystem to a file or directory in the container. This means that any changes made to the mounted file or directory on the host will be immediately reflected in the container, and vice versa.

### Volumes:
Volumes are managed by Docker and typically reside in a Docker-managed directory on the host (like `/var/lib/docker/volumes/`). They are more portable and abstracted from the host filesystem.

---
# Docker Network

Docker Network allows containers to communicate with each other and with external systems. Docker provides different types of networks to manage how containers interact and share resources.

## Docker Network Commands

| Command                                                            | Description                                                                 |
|--------------------------------------------------------------------|-----------------------------------------------------------------------------|
| `docker network create <network-name>`                              | Creates a new custom network.                                                |
| `docker network ls`                                                | Lists all networks in the Docker environment.                               |
| `docker network inspect <network-name>`                             | Displays detailed information about a specific network.                     |
| `docker network connect <network-name> <container-id>`              | Connects a container to an existing network.                                |
| `docker network disconnect <network-name> <container-id>`           | Disconnects a container from a network.                                     |
| `docker network rm <network-name>`                                  | Removes a network from Docker.                                              |
| `docker run --network <network-name>`                               | Runs a container and connects it to a specified network.                    |


## Key Types of Docker Networks

### 1. **Bridge Network**:
The default network for containers. Containers on the bridge network can communicate with each other, but not with the external world unless ports are explicitly exposed.

- **Use case**: Ideal for containers running in isolation from the external network but needing communication with other containers on the same host.

### 2. **Host Network**:
This network mode removes the network isolation between the container and the Docker host. Containers share the same network interface as the host.

- **Use case**: Useful for performance-sensitive applications that need direct access to the host network without overhead.

### 3. **Overlay Network**:
Used for multi-host networking, where containers on different Docker hosts can communicate with each other.

- **Use case**: Ideal for Docker Swarm or Kubernetes clusters, where containers need to communicate across different machines.

### 4. **None Network**:
No networking is provided to the container. It cannot communicate with other containers or external networks.

- **Use case**: Suitable for when you want complete isolation of the container and do not need network access.

---

# Docker Compose

Docker Compose is a tool for defining and running multi-container Docker applications. With Compose, you can configure your application's services, networks, and volumes in a single YAML file (`docker-compose.yml`). It allows you to manage everything from development to production environments with a simple set of commands.

## Docker Compose Commands

| Command                                                       | Description                                                                 |
|---------------------------------------------------------------|-----------------------------------------------------------------------------|
| `docker-compose up`                                            | Builds, (re)creates, starts, and attaches to containers for a service.      |
| `docker-compose down`                                          | Stops and removes all containers, networks, and volumes defined in the Compose file. |
| `docker-compose build`                                         | Builds or rebuilds services defined in the Compose file.                    |
| `docker-compose ps`                                            | Lists all containers that are part of the Docker Compose application.       |
| `docker-compose logs`                                          | Fetches logs from all containers defined in the Compose file.               |
| `docker-compose start`                                         | Starts existing containers for a service.                                   |
| `docker-compose stop`                                          | Stops containers for a service without removing them.                       |
| `docker-compose restart`                                       | Restarts containers for a service.                                          |
| `docker-compose exec <service> <command>`                       | Runs a command inside a running container of a service.                     |
| `docker-compose run <service> <command>`                        | Runs a one-off command in a new container for a service.                    |
| `docker-compose config`                                         | Validates and views the Compose file.                                       |
| `docker-compose logs -f`                                        | Follow logs in real-time for the services.                                  |
| `docker-compose up --build`                                    | Rebuild images before starting containers.                                  |
| `docker-compose up --scale <service>=<num>`                    | Scale a service by running a specified number of containers.                |
| `docker-compose exec <service> bash`                            | Open an interactive bash shell inside a running container.                  |


## Example of a `docker-compose.yml` File

```docker-compose.yml
version: '3'
services:
  web:
    image: nginx:latest
    ports:
      - "80:80"
    networks:
      - frontend
  app:
    image: my-app
    environment:
      - APP_ENV=production
    volumes:
      - data:/app/data
    networks:
      - frontend
  db:
    image: postgres:latest
    environment:
      - POSTGRES_PASSWORD=mysecretpassword
    networks:
      - frontend
    volumes:
      - db_data:/var/lib/postgresql/data

networks:
  frontend:
    driver: bridge

volumes:
  data:
  db_data:
```
