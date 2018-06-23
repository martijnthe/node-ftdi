# NOTE: This file is just to enable code completion in CLion, it's not intended to be used to compile anything.

cmake_minimum_required(VERSION 3.10)

file(GLOB_RECURSE sources
  src/*.c
)

add_library(dummy STATIC ${sources})
target_include_directories(dummy PRIVATE
  /usr/local/include/node
)
