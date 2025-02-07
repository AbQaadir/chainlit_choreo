# Use an official Python runtime as a parent image
FROM python:3.11-slim as build-env

# Set the working directory in the container
WORKDIR /app

# Copy the requirements file into the container
COPY requirements.txt .

# Install any needed packages specified in requirements.txt
RUN pip install --no-cache-dir -r requirements.txt

# Create a new user with UID 10014
RUN addgroup -g 10014 choreo && \
    adduser --disabled-password --no-create-home --uid 10014 --ingroup choreo choreouser

# Copy the rest of the application code into the container
COPY . .

# Run the application
CMD ["python", "hello.py"]

# Use a lightweight base image for the final stage
FROM python:3.11-slim

# Copy the built application from the build stage
COPY --from=build-env /app /app

# Set the working directory
WORKDIR /app

# Switch to the non-root user
USER 10014


# Expose the port the app runs on
EXPOSE 5000

# Run the application
CMD ["python", "hello.py"]
