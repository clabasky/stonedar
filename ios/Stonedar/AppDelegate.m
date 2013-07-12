//
//  AppDelegate.m
//  Stonedar
//
//  Created by devin sewell on 7/1/13.
//  Copyright (c) 2013 Stonedar. All rights reserved.
//

#import "AppDelegate.h"
#import "MainController.h"

@implementation AppDelegate

- (BOOL)application:(UIApplication *)application didFinishLaunchingWithOptions:(NSDictionary *)launchOptions
{
    self.window = [[UIWindow alloc] initWithFrame:[[UIScreen mainScreen] bounds]];
    // Override point for customization after application launch.
    [self loadInitialViewController];

    self.window.backgroundColor = [UIColor whiteColor];
    [self.window makeKeyAndVisible];
    return YES;
}
-(void)loadInitialViewController{
    MainController * mainmenu = [[MainController alloc]initWithNibName:@"MainController" bundle:[NSBundle mainBundle]];
    UINavigationController *navController =  [[UINavigationController alloc]initWithRootViewController:mainmenu];
    [self.window addSubview:navController.view];
    navController.navigationBarHidden = YES;
    [self.window setRootViewController:navController];
}
- (void)applicationWillResignActive:(UIApplication *)application
{
}

- (void)applicationDidEnterBackground:(UIApplication *)application
{
}

- (void)applicationWillEnterForeground:(UIApplication *)application
{
}

- (void)applicationDidBecomeActive:(UIApplication *)application
{
}

- (void)applicationWillTerminate:(UIApplication *)application
{
}

@end
