#include "MPC5748G.h"

int main(void)
{
	// TODO: . . .

	// 1. Turn on an LED
	// the pin that we want to have access to, which is SIUL2_MSCR10
	unsigned int *pDesired = 0xFFFC0268;
	// set OBE and PUS to 1
	*pDesired |= 0x02020000u;

	// 2. Turn off an LED
	// turn on the LED; works the same as above
	SIUL2_MSCR10 |= 0x02020000u;
	// then turn it off. When this value is set to 0, the LED is on; if set to 1 then
	// it is off
	SIUL2_GPDO10 |= 0x01u;

	// 3. Letting the LED flash
	int counter = 0;
    /* Loop forever */
    for(;;) {
    	counter++;
    	if (counter % 10000 == 0) {
    		SIUL2_GPDO10 ^= 0x01u;
    	}
    }

    // 4. Use a button to control an LED
    SIUL2_MSCR10 |= 0x02020000u;
    // set MSCR3 as the input
    SIUL2_MSCR3 |= 0x00080000u; // IBE
    SIUL2_GPDO10 |= 0x01u;

    for (;;) {
    	SIUL2_GPDO10 = ~SIUL2_GPDI3;
    }
}
