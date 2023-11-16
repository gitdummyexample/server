#include <emscripten.h>

EMSCRIPTEN_KEEPALIVE
    extern "C" {
int addTwo(int i, int j){
    return i+j;
}
}
